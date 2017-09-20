import AlloyImage from 'AlloyImage';

AlloyImage.define('purpleStyle', function(){
    var _this = this.clone();
    return this.add(
        _this.act("高斯模糊",3), "正片叠底" ,"RG"
    );

});
