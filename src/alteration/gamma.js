import Alteration from "./AlloyImage-alteration";

export default class Gamma extends Alteration{
    cname = "伽马";
    process = ({data, width, height}, {dorsyMath}) => args => {    

        //gamma阶-100， 100
        var gamma;

        if(args[0] == undefined) gamma = 10;
        else gamma = args[0];

        var normalizedArg = ((gamma + 100) / 200) * 2;
        
        for(var x = 0; x < width; x ++){
            for(var y = 0; y < height; y ++){
                dorsyMath.xyCal({data, width, height}, x, y, function(r, g, b){
                    return [
                        Math.pow(r, normalizedArg),
                        Math.pow(g, normalizedArg),
                        Math.pow(b, normalizedArg)
                    ];
                });
            }
        }
        return {data, width, height};
    }
}
