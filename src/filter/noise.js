import {Filter} from "AlloyImage";
export default class noise extends Filter{ 
    cname = "添加杂色";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var R = parseInt(args[0]) || 100;
      
        var xLength = R * 2 + 1;

        //区块
        for(var x = 0;x < width;x ++){

            for(var y = 0;y < height;y ++){
                
                var realI = y * width + x;
                for(var j = 0;j < 3;j ++){
                    var rand = parseInt(Math.random() * R * 2) - R;
                    data[realI * 4 + j] += rand;
                }

            }

        }


        return {data, width, height};
    }
}
