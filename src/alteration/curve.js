import AlloyImage, {Alteration} from "AlloyImage";

class Curve extends Alteration{
    cname = "曲线";
    process = ({data, width, height}, {dorsyMath}) => args => {    
        /*
         * arg   arg[0] = [3,3] ,arg[1]  = [2,2]
         * */

        //获得插值函数
        var f = dorsyMath.lagrange(args[0], args[1]);

        //调节通道
        var channel = args[2];
        if(!(/[RGB]+/.test(channel))){
            channel = "RGB";
        }
        
        var channelString = channel.replace("R","0").replace("G","1").replace("B","2");
        
        var indexOfArr = [
            channelString.indexOf("0") > -1,
            channelString.indexOf("1") > -1,
            channelString.indexOf("2") > -1
        ];

        //区块
        for(var x = 0; x < width; x ++){

            for(var y = 0; y < height; y ++){
                
                var realI = y * width + x;

                for(var j = 0; j < 3; j ++){
                    if(! indexOfArr[j]) continue;
                    data[realI * 4 + j] = f(data[realI * 4 + j]);
                }

            }

        }

        return {data, width, height};
    }
}

AlloyImage.addAlteration(Curve);
