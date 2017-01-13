import dorsyMath from "./../dorsyMath";

export default class Filter{
    constructor(){
    }

    doFilter(imgData, args){
        let result = this.process(imgData, {dorsyMath});
    }
}
