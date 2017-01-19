import Filter from "./AlloyImage-filter";
export default class sharp extends Filter{ 
    cname = "锐化";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var lamta = args[0] || 0.6;
               

        for(var i = 0,n = data.length;i < n;i += 4){
            var ii = i / 4;
            var row = parseInt(ii / width);
            var col = ii % width;
            if(row == 0 || col == 0) continue;

            var A = ((row - 1) *  width + (col - 1)) * 4;
            var B = ((row - 1) * width + col) * 4;
            var E = (ii - 1) * 4;

            for(var j = 0;j < 3;j ++){
                var delta = data[i + j] - (data[B + j] + data[E + j] + data[A + j]) / 3;
                data[i + j] += delta * lamta;
            }
        }

        return {data, width, height};
    }
}
