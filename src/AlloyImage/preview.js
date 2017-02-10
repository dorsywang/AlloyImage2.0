function view(method, ...args){
     this.then(() => {
        if(! method){
            // 如果在then包里，再执行包含then的方法，其动作会被插入到最后面，而这里是要立即执行的
            // 所以要用this.immediatelyDo::
            this.immediatelyDo::this.cancel();
        }else{
            var n = this.layers.length;

            if(this.layers[n - 1] && this.layers[n - 1][0].type === 1){
                this.cancel();
            }

            var newLayer;
            for(var i = this.layers.length - 1; i > -1; i --){
                var layer = this.layers[i];

                if(layer[0].type === 2){
                    newLayer = layer[0].clone();

                    break;
                }
            }

            if(! newLayer){
                //克隆本图层对象
                newLayer = this.clone();

                window.newLayer = newLayer;
            }


            if(method === "ps"){
                newLayer = newLayer.ps(arg1, arg2, arg3, arg4);
            }else{
                newLayer.act(method, arg1, arg2, arg3, arg4);
            }

            //标记本图层的种类为预览的已合并的图层
            newLayer.type = 1;

            //挂接克隆图层副本到对象
            this.immediatelyDo::this.addLayer(newLayer, "正常", 0, 0);
        }
    });

    return this;
    
}

function excute(){
}

//取消view的结果执行
function cancel(){
    this.then(() => {
        var layers = this.layers;
        var n = layers.length;
        if(layers[n - 1] && layers[n - 1][0].type == 1){
            layers.pop();
        }
    });

    return this;
}

export default AlloyImage => {
    AlloyImage.extend(view);
    AlloyImage.extend(excute);
    AlloyImage.extend(cancel);
};
