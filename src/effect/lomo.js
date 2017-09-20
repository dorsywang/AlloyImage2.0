import AlloyImage from 'AlloyImage';

AlloyImage.define('lomo', function(){
    var m = this.clone().add(
        this.clone() , "滤色"
    ).add(
        this.clone() , "柔光"
    );

    return m.add(
        this.clone().act("反色") , "正常","20%","B"
    ).act("暗角", 6, 200);

});
