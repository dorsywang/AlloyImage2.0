/**
 * @author: Bin Wang
 * @description: 调整RGB 饱和和度  
 * H (-2*Math.PI , 2 * Math.PI)  S (-100,100) I (-100,100)
 * 着色原理  勾选着色后，所有的像素不管之前是什么色相，都变成当前设置的色相，
 * 然后饱和度变成现在设置的饱和度，但保持明度为原来的基础上加上设置的明度
 *
 */
import Alteration from "./AlloyImage-alteration";

export default class SetHSI extends Alteration{
    cname = "色相/饱和度调节";
    process = ({data, width, height}, {dorsyMath}) => args => {   
        args[0] = args[0] / 180 * Math.PI;
        args[1] = args[1] / 100 || 0;
        args[2] = args[2] / 100 * 255 || 0;
        args[3] = args[3] || false;//着色
        
        //调节通道
        var channel = args[4];
        if(!(/[RGBCMY]+/.test(channel))){
            channel = "RGBCMY";
        }
        
        var letters = channel.split("");
        var indexOf = {};

        for(var i = 0; i < letters.length; i ++){
            indexOf[letters[i]] = 1;
        }

        dorsyMath.applyInHSI({data, width, height},function(i, color){
            if(! indexOf[color]) return;

            if(args[3]){
                i.H = args[0];
                i.S = args[1];
                i.I += args[2];
            }else{
                i.H += args[0];
                i.S += args[1];
                i.I += args[2];
            }

        });

        return {data, width, height};
    }
}
