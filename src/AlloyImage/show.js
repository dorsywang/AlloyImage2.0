import AlloyImage from 'AlloyImage';

function show(selector, flag){

    let {compositeCanvas}  = this._getCompositeView();


    //以临时对象data显示
    /*
    this.context.putImageData(this.tempPsLib.imgData, 0, 0);
    */

    if(selector){
        if(typeof selector == "string"){
            var el = document.querySelector(selector);
            el.appendChild(compositeCanvas);
        }else{
            selector.appendChild(compositeCanvas);
        }
    }else{
        document.body.appendChild(compositeCanvas);
    }


    return this;
}
  
AlloyImage.extend(show);
