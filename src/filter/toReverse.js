import {Filter} from "AlloyImage";

export default class toReverse extends Filter{
    cname = "反色";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        for(var i = 0,n = data.length;i < n;i += 4){
            data[i] = 255 - data[i];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
        }

        return {data, width, height};
    }
}
