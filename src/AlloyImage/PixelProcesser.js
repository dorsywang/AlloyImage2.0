import dorsyMath from "./dorsyMath";

export default class PixelProcesser{
    constructor(){
    }

    doProcess(imgData, args){
        let result = this.process(imgData, {dorsyMath})(args);

        return result;
    }
}
