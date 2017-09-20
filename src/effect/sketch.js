import AlloyImage from 'AlloyImage';

AlloyImage.define('sketch', function(){
    var _this = this.clone();

    return this.add(
        _this.act("反色").act("高斯模糊",8), "颜色减淡"
    ).act("toGray").act("锐化",1);
});
