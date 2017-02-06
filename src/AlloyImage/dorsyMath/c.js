export default class C {
     constructor(r,i){
    /*
     * @description:复数对象
     *
     * */
       this.r = r || 0;//实部
       this.i = i || 0;//虚部
    }

    plus(c){
        var tempC = new C();
        tempC.r = this.r + c.r;
        tempC.i = this.i + c.i;

        return tempC;
    }

    minus(c){
        var tempC = new C();
        tempC.r = this.r - c.r;
        tempC.i = this.i - c.i;

        return tempC;
    }

    mutiply(c){
        var tempC = new C();
        tempC.r = this.r * c.r - this.i * c.i;
        tempC.i = this.r * c.i + this.i * c.r;

        return tempC;
    }

    divide(c){

        var tempC = new C();

        var m = c.mutiply(c.conjugated());
        var f = this.mutiply(c.conjugated());
        tempC.r = f.r / m.r;
        tempC.i = f.i / m.r;

        return tempC;
    }

    conjugated(){//取共轭
        var tempC = new C(this.r,-this.i);
        return tempC;
    }

    //取模
    distance(){
        return Math.sqrt(this.r * this.r + this.i * this.i);
    }

}
