import AlloyImage from 'AlloyImage';

AlloyImage.define('soften', function(){
   var _this = this.clone();
    return this.add(
        _this.act("高斯模糊",6), "变暗"
    );

});
