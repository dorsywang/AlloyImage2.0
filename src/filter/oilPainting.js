import Filter from "./AlloyImage-filter";
export default class oilPainting extends Filter{ 
    process = ({data, width, height}, {dorsyMath}) => (...args) => {
        var R = parseInt(args[0]) || 16;
        var xLength = R * 2 + 1;

        //区块
        for(var x = 0;x < width;x ++){

            for(var y = 0;y < height;y ++){
                
                var realI = y * width + x;
                var gray = 0;
                for(var j = 0;j < 3;j ++){
                    gray += data[realI * 4 + j];
                }
                gray = gray / 3;
                var every = parseInt(gray / R) * R;
                for(var j = 0;j < 3;j ++){
                    data[realI * 4 + j] = every;
                }
            }

        }


        return {data, width, height};
    }
}
