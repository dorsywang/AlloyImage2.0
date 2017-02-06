import {Filter} from "AlloyImage";
export default class imageEnhance extends Filter{ 
    cname = "";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var lamta = args[0] || 0.5;
        var p1 = args[1] || {x: 10,y: 10};
        var p2 = args[2] || {x: 50,y: 40};

        function transfer(d){
        }

        for(var i = 0,n = data.length;i < n;i += 4){
            
        }

        return {data, width, height};
    }
}
