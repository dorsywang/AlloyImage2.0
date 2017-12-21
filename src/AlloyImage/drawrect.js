import AlloyImage from 'AlloyImage';

//绘制直方图
let drawRect = function(selector, channel){
    var canvas;

    if(! channel){
        channel = 'RGB';
    }

    var channelString = (channel || '').replace("R","0").replace("G","1").replace("B","2");

    var indexOfArr = [
        channelString.indexOf("0") > -1,
        channelString.indexOf("1") > -1,
        channelString.indexOf("2") > -1
    ];

    if(canvas = document.getElementById("imgRect")){
    }else{
        canvas = document.createElement("canvas");
        canvas.id = "imgRect";
        document.body.appendChild(canvas);
        canvas.width = parseInt(this.canvas.width);
        canvas.height = parseInt(this.canvas.height);
    }

    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var result = [[], [], []];


    let {compositeCanvas, compositeContext}  = this._getCompositeView();

    var imgData = compositeContext.getImageData(0, 0, compositeCanvas.width, compositeCanvas.height);

    var { data, width, height } = imgData;

    if(channelString){
        for(var y = 0; y < height; y ++){
            for(var x = 0; x < width; x ++){
                var i = y * width + x;
                var dot0 = i * 4;
                
                for(var j = 0; j < 3; j ++){
                    if(indexOfArr[j]){
                        if(! result[j][data[dot0 + j]]){
                            result[j][data[dot0 + j]] =  1;
                        }else{
                            result[j][data[dot0 + j]] ++;
                        }
                    }
                }
            }
        }
    }else{

        for(var i = 0, n = data.length; i < n; i ++){
           if(! result[data[i]]){
                result[data[i]] = 1;
           }else{
                result[data[i]] ++;
           }
        }
    }

    var draw = function(result, color){
        context.beginPath();
        context.moveTo(0, canvas.height);

        var max = 0;

        for(var i = 0; i < 255; i ++){
            if(result[i] > max) max = result[i];
        }

        for(var i = 0; i < 255; i ++){
            var currY = result[i] || 0;
            currY = canvas.height - currY / max * 0.8 * canvas.height;
            context.lineTo(i / 256 * canvas.width, currY); 
        }
        
        context.lineTo(canvas.width + 10, canvas.height);
        context.closePath();

        context.fillStyle = color;
        context.fill();

    }

    if(channelString){
        var colorMap = ['red', 'green', 'blue'];
        for(var i = 0; i < result.length; i ++){
            if(result[i].length){
                draw(result[i], colorMap[i]);
            }
        }
    }else{
        draw(result, 'black');
    }

    return this;
};


AlloyImage.extend(drawRect);
