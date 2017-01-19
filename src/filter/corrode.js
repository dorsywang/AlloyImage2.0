import Filter from "./AlloyImage-filter";
export default class corrode extends Filter{ 
    process = ({data, width, height}, {dorsyMath}) => (...args) => {
        let R = parseInt(args[0]) || 3;
        let xLength = R * 2 + 1;

        //区块
        for(var x = 0; x < width; x ++){

            for(var y = 0; y < height; y ++){
                
                var randomI = parseInt(Math.random() * R * 2) - R ;//区块随机代表
                var randomJ = parseInt(Math.random() * R * 2) - R;//区块随机代表
                var realI = y * width + x;
                var realJ = (y + randomI) * width + x + randomJ;

                for(var j = 0; j < 3; j ++){
                    data[realI * 4 + j] = data[realJ * 4 + j];
                }

            }

        }

        return {data, width, height};
    }
}
