import 'babel-polyfill';

import Reflector from "./reflector";
import {loadImage, uniqueId} from "./util";
import {drawImageIOS} from "./fix";

import toGray from "./filter/toGray";

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
        }else if(typeof img == "string"){
            let img = await loadImage(img);

            canvas.width = parseInt(img.width);
            canvas.height = parseInt(img.height);

            context.drawImage(img, 0, 0, img.width, img.height);
        }else{
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
            await this._doAct(method, args);
        });

        return this;
    }

    then(fn){
        this._tasker = this._tasker.then(fn);

        return this;
    }

    async _doAct(method, args){
        await Reflector.reflect(this.canvas, method, args);
    }

    _complileLayers(){
        //如果其上无其他挂载图层，加快处理
        return ;
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
        return this.then(() => {
            this._complileLayers();


            //以临时对象data显示
            /*
            this.context.putImageData(this.tempPsLib.imgData, 0, 0);
            */

            if(selector){
                if(typeof selector == "string"){
                    var el = document.querySelector(selector);
                    el.appendChild(this.canvas);
                }else{
                    selector.appendChild(this.canvas);
                }
            }else{
                document.body.appendChild(this.canvas);
            }

            return this;
            
        });
    }

    static addFilter(filter){
        Reflector.addFilter(filter);
    }
}

AlloyImage.addFilter(toGray);


export default AlloyImage;

window.AlloyImage = AlloyImage;
