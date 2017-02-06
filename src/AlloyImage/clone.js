  // clone只对单图层有效
function clone(){
    let newAIObj = new AlloyImage(1, 1); //this.width, this.height);

    newAIObj.then(() => {
        return this.then(() => {

            // 这里直接取 立即生效
            newAIObj.canvas.width = this.width;
            newAIObj.canvas.height = this.height;

            newAIObj.imgData = this.imgData;
        });
    });

    return newAIObj;
}

export default AlloyImage => {
    AlloyImage.extend(clone);
};
