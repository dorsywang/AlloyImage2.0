import AlloyImage, {Filter} from "AlloyImage";
class posterize extends Filter{ 
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var dM = dorsyMath;

        //灰度阶数
        //由原来的255阶映射为现在的阶数
        var step = args[0] || 20;

        step = step < 1 ? 1 : (step > 255 ? 255 : step);
        var level = Math.floor(255 / step);
        
        for(var x = 0; x < width; x ++){
            for(var y = 0; y < height; y ++){
                dM.xyCal({data, width, height}, x, y, function(r, g, b){
                    return [
                        Math.floor(r / level) * level,
                        Math.floor(g / level) * level,
                        Math.floor(b / level) * level
                    ];
                });
            }
        }
        return {data, width, height};
    }
}

AlloyImage.addFilter(posterize);
