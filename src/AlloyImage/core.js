import 'core-js/modules/es6.promise';
import 'regenerator-runtime/runtime';

import {loadImage, uniqueId, device} from "./util";
import {drawImageIOS} from "./fix";

/*
function FakePromise(executor) {
    var p = new Promise(function (resolve, reject) {
        // before
        return executor(resolve, reject);
    });
    // after

    p.__proto__ = FakePromise.prototype;
    return p;
}

FakePromise.__proto__ = Promise;
FakePromise.prototype.__proto__ = Promise.prototype;

FakePromise.prototype.then = function then(onFulfilled, onRejected) {
    // before
    var returnValue = Promise.prototype.then.call(this, onFulfilled, onRejected);
    // after
    return returnValue;
}

FakePromise.prototype.act = function(c){
    return this.then(function(){
        return new Promise(function(rs){
            setTimeout(function(){
                console.log(c);
                rs();
            }, 1000);
        });
    });
};

*/

class AILayerData{
    constructor(canvas){
        this.canvas = canvas;
    }

    get context(){
        return this.canvas.getContext('2d');
    }

    get width(){
        return this.canvas.width;
    }

    get height(){
        return this.canvas.height;
    }

    get imgData(){
        return this.context.getImageData(0, 0, this.width, this.height);
    }

    set imgData(imgData){
        this.context.putImageData(imgData, 0, 0);
    }

    setCanvas(canvas){
        this.canvas = canvas;
    }
}

class AICore{
    constructor(img, width, height){
        this._tasker = Promise.resolve(true);

        //记录时间 time trace
        this.startTime = + new Date();


        this.then(async () => {
            let {canvas, context} = await this.initCanvas(img, width, height);

            //this.AILayerData = new AILayerData(canvas);

            this.canvas = canvas;
            this.context = context;

            this.imgData = context.getImageData(0, 0, canvas.width, canvas.height);

            this.name = `AlloyImage_${uniqueId()}`;
            this.canvas.id = this.name;

            this.layers = [];

            var ctxCanvas = document.createElement("canvas");
            ctxCanvas.width = canvas.width;
            ctxCanvas.height = canvas.height;

            this.ctxCanvas = ctxCanvas;
            this.ctxContext = ctxCanvas.getContext("2d");

            this.width = this.canvas.width;
            this.height = this.canvas.height;


            /*
            this.immediatelyDo = this;
            this.immediatelyDo.then = function(func){
                return this::func();
            };
            */
        });
    }

    async initCanvas(img, width, height){
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");

        //var l = psLib(20,30);构造适配
        if(! isNaN(img)){
            canvas.width = img;
            canvas.height = width;

            height = height || "#fff";

            context.fillStyle = height;
            context.fillRect(0, 0, img, width);

            this.srcImg = "";
        }else{
            if(typeof img == "string"){
                img = await loadImage(img);
            }

            let dw = width, dh = height;

            let sw = img.width, sh = img.height;
            let ratio = sw / sh;

            if(width || height){
                if(! height){
                    dh = ~~ (dw / ratio);
                }else if(! width){
                    dw = dh * ratio;
                }
            }else{
                dw = sw;
                dh = sh;
            }

            canvas.width = dw;
            canvas.height = dh;

            if(! isNaN(dw)){
                if(device == "ios"){
                    drawImageIOS(context, img, dw, dh);
                }else{
                    context.drawImage(img, 0, 0, dw, dh);
                }

            }else{
                context.drawImage(img, 0, 0);
            }

            this.srcImg = img;
        }

        return {canvas, context};
    }

    getImageData(){
        //return this.then(() => {
            return this.imgData;
        //});
    }

    /*
    addAsyncTask(fn, pos){
    }
    */

    

    then(fn){
        
        // then内部的act等方法开一个子任务去处理
        // 如果直接act会直接add在后面
        var wrap = async () => {
            var oldTask = this._tasker;

            this._tasker = Promise.resolve(true);

            await fn.bind(this)();

            this._tasker = oldTask;
        };


        this._tasker = this._tasker.then(wrap);

        return this;

    }

    promise(){
        return this._tasker;
    }

    // 获得合成视图
    async _getCompositeView(){
        if(this.layers.length === 0){
            let compositeCanvas = document.createElement('canvas');
            compositeCanvas.width = this.width;
            compositeCanvas.height =  this.height;

            let compositeContext = compositeCanvas.getContext("2d");

            console.log(this.imgData, 'show');
            compositeContext.putImageData(this.imgData, 0, 0);

            return {
                compositeCanvas,
                compositeContext
            }

        }else{

            //创建一个临时的psLib对象，防止因为合并显示对本身imgData影响
            var tempAIObj = new AlloyImage(this.canvas.width, this.canvas.height);
            tempAIObj.add(this, "正常", 0, 0);


            //this.tempPsLib = tempPsLib;

            //将挂接到本对象上的图层对象 一起合并到临时的psLib对象上去 用于显示合并的结果，不会影响每个图层，包括本图层
            for(var i = 0; i < this.layers.length; i ++){
                var tA = this.layers[i];
                var layers = tA[0].layers;
                var currLayer = tA[0];

                if(layers[layers.length - 1] && layers[layers.length - 1][0].type == 1) currLayer = layers[layers.length - 1][0];
                tempAIObj.add(currLayer, tA[1], tA[2], tA[3]);
            }

            await tempAIObj;

            return {
                compositeCanvas: tempAIObj.canvas,
                compositeContext: tempAIObj.context
            }

            //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        //如果其上无其他挂载图层，加快处理
        if(this.layers.length == 0){
            this.tempPsLib = {
                imgData: this.imgData
            };
        }else{

            //创建一个临时的psLib对象，防止因为合并显示对本身imgData影响
            var tempPsLib = new AlloyImage(this.canvas.width, this.canvas.height);
            /*
            tempPsLib.add(this, "正常", 0, 0, isFast);
            this.tempPsLib = tempPsLib;

            //将挂接到本对象上的图层对象 一起合并到临时的psLib对象上去 用于显示合并的结果，不会影响每个图层，包括本图层
            for(var i = 0; i < this.layers.length; i ++){
                var tA = this.layers[i];
                var layers = tA[0].layers;
                var currLayer = tA[0];

                if(layers[layers.length - 1] && layers[layers.length - 1][0].type == 1) currLayer = layers[layers.length - 1][0];
                tempPsLib.add(currLayer, tA[1], tA[2], tA[3], isFast);
            }
            */

            //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        }
        
    }

    static extend(func){
        let name = func.name;

        this.prototype[name] = func;
    }

    wait(aiObj){
        var waitThing = new Promise((rs, rj) => {
            aiObj.then(function(){
                rs();
            });
        });

        this.then(async () => {
            await waitThing;
        });

        return this;
    }
}



/*
export let register = (obj) => {
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            obj[i](AlloyImage);
        }
    }
};
*/

export default AICore;
