import 'core-js/modules/es6.promise';
import 'regenerator-runtime/runtime';

import {loadImage, uniqueId, device} from "./util";
import {drawImageIOS} from "./fix";

class AICore{
    constructor(img, width, height){
        //记录时间 time trace
        this.startTime = + new Date();

        var orientation = 0;
        if(img.exifdata && typeof img.exifdata['Orientation'] !== 'undefined'){
            orientation = img.exifdata['Orientation'];
        }

        let {canvas, context} = this.initCanvas(img, width, height, orientation);

        //this.AILayerData = new AILayerData(canvas);

        this.layers = [];

        // this.canvas = canvas;
        // this.context = context;

        this.imgData = context.getImageData(0, 0, canvas.width, canvas.height);

        this.name = `AlloyImage_${uniqueId()}`;

      

        // this.canvas.id = this.name;


        /*
        var ctxCanvas = document.createElement("canvas");
        ctxCanvas.width = canvas.width;
        ctxCanvas.height = canvas.height;

        this.ctxCanvas = ctxCanvas;
        this.ctxContext = ctxCanvas.getContext("2d");
        */

        this.width = canvas.width;
        this.height = canvas.height;
    }

    initCanvas(img, width, height, orientation){
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
            let dw = width, dh = height;

            let sw = img.width, sh = img.height;


            if(orientation === 6 || orientation === 8){
                sw = img.height;
                sh = img.width;
            }

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

            context.save();

            let temp;
            switch(orientation){
                case 6:
                    context.transform(0, 1, -1, 0, dw, 0);

                    // 坐标变换后dw dh也要变化
                    temp = dh;
                    dh = dw;
                    dw = temp;
                break;

                case 8:
                    context.transform(0, -1, 1, 0, 0, dh);

                     // 坐标变换后dw dh也要变化
                    temp = dh;
                    dh = dw;
                    dw = temp;

                break;

                case 3:
                    context.transform(-1, 0, 0, -1, dw, dh);

                break;
            }


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

            context.restore();
        }

        return {canvas, context};
    }

    getImageData(){
        return this.imgData;
    }

    
    // 获得合成视图
    _getCompositeView(){
        if(this.layers.length === 0){
            let compositeCanvas = document.createElement('canvas');
            compositeCanvas.width = this.width;
            compositeCanvas.height =  this.height;

            let compositeContext = compositeCanvas.getContext("2d");

            compositeContext.putImageData(this.imgData, 0, 0);

            return {
                compositeCanvas,
                compositeContext
            }

        }else{

            //创建一个临时的psLib对象，防止因为合并显示对本身imgData影响
            var tempAIObj = new AlloyImage(this.width, this.height);

            tempAIObj.add(this, "正常", 0, 0);


            //this.tempPsLib = tempPsLib;

            //将挂接到本对象上的图层对象 一起合并到临时的psLib对象上去 用于显示合并的结果，不会影响每个图层，包括本图层
            for(var i = 0; i < this.layers.length; i ++){
                var tA = this.layers[i];
                var currLayer = tA[0];

                var layers = tA[0].layers;

                if(layers[layers.length - 1] && layers[layers.length - 1][0].type == 1) currLayer = layers[layers.length - 1][0];
                tempAIObj.add(currLayer, tA[1], tA[2], tA[3]);
            }

            return tempAIObj._getCompositeView();
        }
        
    }

    static extend(funcOrName, func){
        if(typeof funcOrName === 'function'){
            let name = funcOrName.name;
            this.prototype[name] = funcOrName;

            return;
        }

        this.prototype[funcOrName] = func;
    }
}


export default AICore;
