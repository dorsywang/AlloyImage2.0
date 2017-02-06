import 'babel-polyfill';

import LayerPixelProcesser from "./layerPixelProcesser";
import {loadImage, uniqueId, device} from "./util";
import {drawImageIOS} from "./fix";

class AlloyImage{
    constructor(img, width, height){
        this._tasker = Promise.resolve(true);

        //记录时间 time trace
        this.startTime = + new Date();

        this.then(async () => {
            let {canvas, context} = await this.initCanvas(img, width, height);

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

            this.layers = [];

        });
    }

    set width(w){
        this.then(() => {
            this.canvas.width = w;
        });

        return this;
    }

    get width(){
        return this.canvas.width;
    }


    set height(h){
        this.then(() => {
            this.canvas.height = h;
        });

        return this;
    }

    get height(){
        return this.canvas.height;
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

    act(method, ...args){
        this.then(async () => {
            console.log('act', method);
            await this._doAct(method, args);
        });

        return this;
    }

    getImageData(){
        return this.then(() => {
            return this.imgData;
        });
    }

    

    then(fn){
        
        this._tasker = this._tasker.then(fn);

        return this;
    }

    async _doAct(method, args){
        let layerPixelProcesser = new LayerPixelProcesser(this.imgData);

        let imgData = await layerPixelProcesser.process(method, args);

        this.imgData = imgData;
    }

    // 获得合成视图
    _getCompositeView(){
        
        let compositeCanvas = document.createElement('canvas');
        compositeCanvas.width = this.width;
        compositeCanvas.height =  this.height;

        let compositeContext = compositeCanvas.getContext("2d");

        compositeContext.putImageData(this.imgData, 0, 0);

        return {
            compositeCanvas,
            compositeContext
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

    show(selector){
        this.then(() => {

            console.log('show');

            let {compositeCanvas}  = this._getCompositeView();


            //以临时对象data显示
            /*
            this.context.putImageData(this.tempPsLib.imgData, 0, 0);
            */

            if(selector){
                if(typeof selector == "string"){
                    var el = document.querySelector(selector);
                    el.appendChild(compositeCanvas);
                }else{
                    selector.appendChild(compositeCanvas);
                }
            }else{
                document.body.appendChild(compositeCanvas);
            }

        });

        return this;
    }

    addLayer(...args){
        this.then(() => {
            this.layers.push(args);
        });

        return this;
    }

    static addFilter(filter){
        LayerPixelProcesser.addFilter(filter);
    }

    static addAlteration(alteration){
        LayerPixelProcesser.addAlteration(alteration);
    }

    // clone只对单图层有效
    clone(){
        let newAIObj = new AlloyImage(1, 1); //this.width, this.height);

        newAIObj.then(() => {
            return this.then(() => {

                // 这里直接取 立即生效
                newAIObj.canvas.width = this.width;
                newAIObj.canvas.height = this.height;

                newAIObj.imgData = this.imgData;
            });
        });

        return newAIObj;
    }

    static extend(func){
        let name = func.name;

        console.log(name, 'name');
        this.prototype[name] = func;
    }
}


export default AlloyImage;
