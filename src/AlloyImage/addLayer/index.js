import _addLayer from './addLayer';
import AlloyImage from 'AlloyImage';

function add(aiObj, ...args){
    let numberArr = [], method, alpha, dx, dy, isFast, channel;

    //做重载
    for(let i = 0; i < arguments.length; i ++){
        if(!i) continue;

        switch(typeof(arguments[i])){
            case "string":
                if(/\d+%/.test(arguments[i])){//alpha
                    alpha = arguments[i].replace("%", "");
                }else if(/[RGB]+/.test(arguments[i])){//channel
                    channel = arguments[i];
                }else{//method
                    method = arguments[i];
                }
            break;

            case "number":
                numberArr.push(arguments[i]);
            break;

            case "boolean":
               isFast = arguments[i];
            break;
        }
    }

    //赋值
    dx = numberArr[0] || 0;
    dy = numberArr[1] || 0;
    method = method || "正常";
    alpha = alpha / 100 || 1;
    isFast = isFast || false;
    channel = channel || "RGB";

    //console.log("add init");

        //做映射转发
    // 这里有两个异步队列
    // 要等this完成，也要等aiObj完成
    // 所以不能简单then, 不然then后面的内容执行的时候，aiObj已不在这个时机
    

    var wait = new Promise(rs => {
        aiObj.then(() => {
            rs(aiObj.cloneImageData());
        });
    });

    console.log('add');

    this.then(async () => {
        let aiObjImgData = await wait;
        this.imgData = _addLayer(this.imgData, aiObjImgData, method, alpha, dx, dy, isFast, channel);

        console.log('xxxxxxx');
    });


    /*
    var aiObjImgData;
    // 等待aiObj完成后再做操作
    this.wait(aiObj.then(() => {
        aiObjImgData = aiObj.cloneImageData();
    })).then(() => {
        console.log(aiObjImgData, 'fff');
        this.imgData = _addLayer(this.imgData, aiObjImgData, method, alpha, dx, dy, isFast, channel);
    });
    */

    return this;

}

function addLayer(...args){
    this.then(() => {
        this.layers.push(args);
    });

    return this;
}


AlloyImage.extend(add);
AlloyImage.extend(addLayer);