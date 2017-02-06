export default class{
    constructor(canvas, context, imgData){
        this.filterMap = {
        };

        this.canvas = canvas;
    }

    reflect(canvas, name, args){
        let filter = this.filterMap[name];

        filter.doFilter(canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height), args);
    }

    addFilter(Filter){
        let filter =  new Filter();
        let filterName = Filter.name;

        this.filterMap[filterName] = filter;
    }
}
