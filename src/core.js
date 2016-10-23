class Tasker{
    constructor(func){
        this.__ = [];

        this._state = 'finished';

    }
    push(item, func){
        this.__.push([item, func]);

        this.nextTick();
    }

    nextTick(){
        if(this._state === 'finished'){

            let first = this.__.shift();

            if(first){
                let operArgs = first[0];
                let operFunc = first[1];

                operFunc(operArgs.args).then(data => {
                    this.nextTick();
                }, data => {
                });;

                this._state = 'pending';
            }else{
            }

        }else{
        }
    }
}

class AlloyImage{
    constructor(){
        this.taskQueue = new Tasker((item) => {
        });
    }

    act(...args){
        this.taskQueue.push({
            method: 'act',
            args: args
        }, (args){
        });
    }


    next(){
    }
}


export default AlloyImage;
