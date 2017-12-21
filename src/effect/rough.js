import AlloyImage from 'AlloyImage';

AlloyImage.define('rough', function(){
    return this.add(
       new AlloyImage(this.width, this.height, "#000").act("喷点").act("反色").act("浮雕效果")
       ,"叠加"
   );
});
