import C from  './c';
import Matrix from './matrix';

export default new class DorsyMath{
    FFT1(dataArr){
    /*
     * @description:快速傅里叶变换
     * @按时间抽取
     * */
        var size = dataArr.length;
        var count = 0;

        //------计算权重W------------
        var W = [];
        for(var i = 0; i < size; i ++){
            W[i] = this.exp(-2 * Math.PI * i / size);
        }
        

        butterflyCal();
        return dataArr;

        //蝶形运算单元
        function butterflyCal(){
            count ++;

            //蝶形单元个数
            var singleLength = size / Math.pow(2,count);
            var everyLength = size / singleLength;

            for(var i = 0; i < singleLength; i ++){

                //逐次计算蝶形单元
                singleButterflyCal(i * everyLength, (i + 1) * everyLength - 1, count);
            }

            //如果单元个数大于1继续运算
            if(singleLength > 1){

                //递归
                butterflyCal();
            }else{
            }
            
        }

        //一个蝶形单元 n运算次数 蝶形单元的成对间隔
        function singleButterflyCal(start, end, n){

            var delta =  Math.pow(2,n - 1);

            for(var i = start, j = 0; i <= (end - delta); i ++){

                //i 的运算对
                var pairI = i + delta;

                //计算i运算时的权重下标
                var currWeightForI = j * size / Math.pow(2,n);

                //计算i的运算对时候的权重
                var currWeightForPairI = currWeightForI + size / 4;

                if(!(dataArr[i] instanceof C)) dataArr[i] = new C(dataArr[i]);

                if(!(dataArr[pairI] instanceof C)) dataArr[pairI] = new C(dataArr[pairI]);

                var currResultForI = dataArr[i].plus(dataArr[pairI].mutiply(W[currWeightForI]));
                var currResultForPairI = dataArr[i].plus(dataArr[pairI].mutiply(W[currWeightForPairI]));

                dataArr[i] = currResultForI;
                dataArr[pairI] = currResultForPairI;

                j++;
            }
        }

    }

    DFT(){
    /*
     * @description:离散傅里叶变换
     * */

    }

   Matrix = Matrix;

   C = C;

   exp(theta,r){//  r e^(i * theta) = r cos theta + r i * sin theta

        theta = theta || 0;
        r = r || 1;

        var tempC = new C();
        tempC.r = r * Math.cos(theta);
        tempC.i = r * Math.sin(theta);
        
        return tempC;
    }

    lagrange(xArr,yArr){
    /*
     * Lagrange插值
     * @usage   M.lagrange([1,2],[2,4])(3);
     * */
        var num = xArr.length;
        function getLk(x,k){//计算lk
            var omigaXk = 1;
            var omigaX = 1;
            for(var i = 0;i < num;i ++){
                if(i != k){
                    omigaXk *= xArr[k] - xArr[i];
                    omigaX *= x - xArr[i];
                }
            }
            var lk = omigaX / omigaXk;
            return lk;
        }
        var getY = function(x){
            var L = 0;
            for(var k = 0;k < num;k ++){
                var lk = getLk(x,k);
                L += yArr[k] * lk;

            }
            return L;
        };
        return getY;

    }

    applyMatrix(imgData,matrixArr,low){//对图象信号实行掩模算子变换 low为阈值,滤波运算

        low = low || 0;
        var data = imgData.data;
        var width = imgData.width;
        var height = imgData.height;
        var matrixSize = matrixArr.length;
        var template = new Matrix(matrixArr,matrixSize,1);                    
        var tempData = [];
        var start = -(Math.sqrt(matrixSize) - 1) / 2;

        for(var i = 0,n = data.length;i < n;i += 4){
            var ii = i / 4;
            var row = parseInt(ii / width);
            var col = ii % width;
            if(row == 0 || col == 0) continue;

            var pixelArr = [[],[],[]];
            for(var k = start;k <= -start;k ++){
                var currRow = row + k;

                for(var kk = start;kk <= -start;kk ++){

                    var currCol = col + kk;
                    var currI = (currRow * width + currCol) * 4;

                    for(var j = 0;j < 3;j ++){
                        var tempI = currI + j; 
                        pixelArr[j].push(data[tempI]);
                    }

                }

            }

            var pixelMatrix = new Matrix(pixelArr,3,matrixSize);
            var resultMatrix = pixelMatrix.mutiply(template);

            for(var j = 0;j < 3;j ++){
               tempData[i + j] = resultMatrix.data[j]; 
            }
            tempData[i + 4] = data[i + 4];
        }

        for(var i = 0,n = data.length;i < n;i ++){
            if(tempData[i]){
                data[i] = tempData[i] < low ? tempData[i] : data[i];
            }
        }

        return imgData;
    }

    RGBToHSI(R,G,B){
        var theta = ((R - G + R - B) / 2) / Math.sqrt((R - G) * (R - G) + (R - B) * (G - B)) || 0;
        theta = Math.acos(theta);
        var H = B > G ? (2 * Math.PI - theta) : theta;

        if(R + G + B > 0){
            var S = 1 - 3 * Math.min(R,G,B) / (R + G + B);
        }else{
            var S = 0;
        }

        var I = (R + G + B) / 3;

        if(H > 2 * Math.PI) H = 2 * Math.PI;
        if(H < 0) H = 0;

        return {
            H: H,
            S: S,
            I: I
        };

    }

    HSIToRGB(H,S,I){//H为弧度值
        //H (-Math.PI , Math.PI)  S (-1,1) I (-255,255)
        if(H < 0){
            H %= 2 * Math.PI;
            H += 2 * Math.PI
        }else{
            H %= 2 * Math.PI;
        }

        if(H <= Math.PI * 2 / 3){
            var B = I * (1 - S);
            var R = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
            var G = 3 * I - (R + B);

        }else if(H <= Math.PI * 4 / 3){
            H = H - Math.PI * 2 / 3;

            var R = I * (1 - S);
            var G = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
            var B = 3 * I - (G + R);

        }else{
            H = H - Math.PI * 4 / 3;

            var G = I * (1 - S);
            var B = I * (1 + S * Math.cos(H) / Math.cos(Math.PI / 3 - H));
            var R = 3 * I - (G + B);

        }

        return {
            R: R,
            G: G,
            B: B
        };
    }

    applyInHSI(imgData, func){//在hsi空间上应用func
        /*
         * function(i){
         *      i.H += 3;
         * }
         * H (-2*Math.PI , 2 * Math.PI)  S (-1,1) I (-255,255)
         * */
        var colorMap = ["R", "Y", "G", "C", "B", "M"];
        var data = imgData.data;
        
        var d30 = Math.PI / 6;
        var d60 = Math.PI / 3;
        for(var i = 0, n = data.length; i < n; i += 4){
            var hsiObj = this.RGBToHSI(data[i], data[i + 1], data[i + 2]);

            //得到颜色属性
            var h = hsiObj.H + d30;
            var color = ~~ (h / d60);
            var rColor = colorMap[color % 6];

            func(hsiObj, rColor, data[i + 3]);

            if(hsiObj.S > 1) hsiObj.S = 1;
            if(hsiObj.S < 0) hsiObj.S = 0;

            var rgbObj = this.HSIToRGB(hsiObj.H,hsiObj.S,hsiObj.I);
            data[i] = rgbObj.R;
            data[i + 1] = rgbObj.G;
            data[i + 2] = rgbObj.B;
        }
        
    }

    applyInCoordinate(imgData,func){//在坐标空间上应用func
        /*
         * function(dot){
         *      
         * }
         * */
    }

    //计算两个点之间的距离
    //p1   array
    //p2   array
    distance(p1, p2){
        p2 = p2 || [0, 0];

        p1 = new C(p1[0], p1[1]);
        p2 = new C(p2[0], p2[1]);

        var p3 = p1.minus(p2);
        return p3.distance();
    }

    //将(x,y)的坐标转为单维的i
    xyToIFun(width){
        return function(x, y, z){
            z = z || 0;
            return (y * width + x) * 4 + z;
        };
    }

    //在(x,y)进行运算
    //rgbfun 在rgb三个上进行的操作 aFun在alpha进行的操作
    //rgbFun:   function(r, g, b){
    //      return [r, g, b]
    //     
    //}
    xyCal(imgData, x, y, rgbFun, aFun){
        var xyToIFun  = this.xyToIFun(imgData.width);
        var j  = xyToIFun(x, y, 0);
        var data = imgData.data;
        var processedData = rgbFun(data[j], data[j + 1], data[j + 2]);

        if(processedData){
            data[j] = processedData[0];
            data[j + 1] = processedData[1];
            data[j + 2] = processedData[2];
        }

        if(aFun){
            data[j + 3] = aFun(data[j + 3]);
        }

    }
}
