import AlloyImage from 'AlloyImage';

AlloyImage.define('vintage', function(){
    return this.act("灰度处理").then(() => {
        return this.add(
            new AlloyImage(this.width, this.height, "#808080").act("添加杂色").act("高斯模糊",4).act("色相/饱和度调节",32,19,0,true),"叠加"
        ); 
    });
});
