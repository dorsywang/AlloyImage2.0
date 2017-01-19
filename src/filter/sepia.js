import Filter from "./AlloyImage-filter";
export default class sepia extends Filter{ 
    process = ({data, width, height}, {dorsyMath}) => (...args) => {
        for(var x = 0; x < width; x ++){
            for(var y = 0; y < height; y ++){
                dorsyMath.xyCal({data, width, height}, x, y, function(r, g, b){
                    return [
                        r * 0.393 + g * 0.769 + b * 0.189,
                        r * 0.349 + g * 0.686 + b * 0.168,
                        r * 0.272 + g * 0.534 + b * 0.131
                    ];
                });
            }
        }
        return {data, width, height};
    }
}
