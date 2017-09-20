export let loadImage = src => new Promise((rs, rj) => {
    let tmpImg = new Image();
    tmpImg.onload = () => {
        rs(tmpImg);
        /*
        canvas.width = parseInt(this.width);
        canvas.height = parseInt(this.height);

        context.drawImage(this, 0, 0, this.width, this.height);
        */
    };

    tmpImg.onerror = (e) => {
        rj(`${src} load error`);
    };

    tmpImg.src = src;
});


export let device = (() => {
    if(window.navigator){
        let ua = window.navigator.userAgent;

        if(/Android|android/.test(ua)){
            return 'android';
        }else if(/iPhone|iPad|iPod/.test(ua)){
            return 'ios';
        }else{
            return 'other';
        }
    }else{
        return "sandBox";
    }
})();

export let uniqueId = () => {
    return ~~ (Math.random() * 1e6);
};
