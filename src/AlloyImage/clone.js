import AlloyImage from 'AlloyImage';

  // clone只对单图层有效
function clone(){

    let newAIObj = new AlloyImage(1, 1);//this.width, this.height); //this.width, this.height);

    newAIObj
        .wait(this)
        .then(() => {
            // 这里直接取 立即生效
            newAIObj.canvas.width = this.width;
            newAIObj.canvas.height = this.height;

            newAIObj.imgData = this.cloneImageData();
        });

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
