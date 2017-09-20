import AlloyImage from 'AlloyImage';

AlloyImage.define('carveStyle', function(){
    var layerClone = this.clone().act("马赛克").act("查找边缘").act("浮雕效果");
    return this.add(
        layerClone, "线性光"
    );
});
