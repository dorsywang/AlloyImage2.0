import AlloyImage from 'AlloyImage';

AlloyImage.define('warmAutumn', function(){
    var m = this.clone().act("色相/饱和度调节",36,47,8,true).act("暗角", 6, 150);
    return this.add(
        m, "叠加"
    );
});
