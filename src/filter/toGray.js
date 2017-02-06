import {Filter} from "AlloyImage";

export default class toGray extends Filter{
    cname = "灰度处理";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        for(var i = 0,n = data.length;i < n;i += 4){
            var gray = parseInt((0.299 * data[i] + 0.578 * data[i + 1] + 0.114 * data[i + 2]));
            data[i + 2] = data[i + 1] = data[i] = gray;
        }

        return {data, width, height};
    }
}
