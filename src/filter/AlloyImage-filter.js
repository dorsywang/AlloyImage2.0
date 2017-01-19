import dorsyMath from "./../dorsyMath";

export default class Filter{
    constructor(){
    }

    doFilter(imgData, args){
        return new Promise((rs, rj) => {
            let result = this.process(imgData, {dorsyMath})(args);

            rs(result);
        });
    }
}
