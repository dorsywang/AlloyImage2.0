import Filter from "./AlloyImage-filter";

export default class toThresh extends Filter{
    process = ({data, width, height}, {dorsyMath}) => (...args) => {
        for(var i = 0,n = data.length;i < n;i += 4){
            var gray = parseInt((0.299 * data[i] + 0.578 * data[i + 1] + 0.114 * data[i + 2]));
            data[i + 2] = data[i + 1] = data[i] = gray;
        }

        var arg = args[0] || 128;
        for(var i = 0,n = data.length;i < n;i ++){
            if((i + 1) % 4){
                data[i] = data[i] > arg ? 255 : 0;
            }
        }

        return {data, width, height};
    }
}
