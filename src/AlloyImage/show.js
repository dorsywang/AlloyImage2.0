function show(selector){
    this.then(() => {

        console.log('show');

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

    });

    return this;
}
  
export default AlloyImage => {
    AlloyImage.extend(show);
};
