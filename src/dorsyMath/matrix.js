export default class Matrix{
     constructor(arr,arg,arg2){
        /*
     * @descriptiont:矩阵类
     * 构造一个矩阵,当然从原始的数据构造,但具有矩阵的所有基本运算方法
     * arr参数可以为矩阵,附加字符串参数为构造的行列如 ([0,0],"3*4")    或("构造3*4的1矩阵")  ("构造3*4的0矩阵")
     * */
        var resultArr = [];

        if(arg){

            if(isNaN(arg)){
                var m = /(\d+)\s*\*/.exec(arg)[1];
                var n = /\*\s*(\d+)/.exec(arg)[1];
            }else{
                m = arg;
                n = arg2;
            }

            //本身二维的
            if(arr[0] && arr[0][0]){
                for(var i = 0;i < m;i ++){
                    resultArr[i] = [];
                    for(var j = 0;j < n;j ++){
                        resultArr[i][j] = arr[i][j] || 0;
                    }
                }

            //一维的
            }else{

                for(var i = 0;i < m;i ++){
                    resultArr[i] = [];
                    for(var j = 0;j < n;j ++){
                        var t = i * n + j;
                        resultArr[i][j] = arr[i * n + j] || 0;
                    }
                }

            }

            this.m = m;
            this.n = n;

        }else{
            this.m = arr.length;
            this.n = arr[0].length;
        }

        this.data = resultArr;
    }


    plus(matrix){
        if(this.m != matrix.m || this.n != matrix.n){
            throw new Error("矩阵加法行列不匹配");
        }


        var tempM = new Matrix([],this.m,this.n);
        for(var i = 0;i < this.m;i ++){
           for(var j = 0;j < this.n;j ++){
                tempM.data[i][j] = this.data[i][j] + matrix.data[i][j];
           }
        }
        return tempM;
    }

    minus(matrix){
        if(this.m != matrix.m || this.n != matrix.n){
            throw new Error("矩阵减法法行列不匹配");
        }


        var tempM = new Matrix([],this.m,this.n);
        for(var i = 0;i < this.m;i ++){
           for(var j = 0;j < this.n;j ++){
                tempM.data[i][j] = this.data[i][j] - matrix.data[i][j];
           }
        }
        return tempM;
    }

    mutiply(matrix){//左乘另一矩阵
        if(this.n != matrix.m){
            throw new Error("矩阵乘法行列不匹配");
        }


        var tempM = new Matrix([],this.m,matrix.n);
        for(var i = 0;i < this.m;i ++){
           for(var j = 0;j < matrix.n;j ++){

                var sum = 0;
                for(var ii = 0;ii < this.n;ii ++){
                    sum += this.data[i][ii] * matrix.data[ii][j];
                }
                tempM.data[i][j] = sum;
           }
        }
        return tempM;

    }
}

