import AlloyImage from 'AlloyImage';

  // clone只对单图层有效
function clone(){

    let newAIObj = new AlloyImage(this.width, this.height); //this.width, this.height);

    // 这里直接取 立即生效
    newAIObj.imgData = this.cloneImageData();

    return newAIObj;
}

function cloneImageData(){
    var imgData = this.getImageData();
    var canvas = document.createElement('canvas');

    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext('2d');
    ctx.putImageData(imgData, 0, 0);

    return ctx.getImageData(0, 0, this.width,  this.height);
}



AlloyImage.extend(clone);

AlloyImage.extend(cloneImageData);
