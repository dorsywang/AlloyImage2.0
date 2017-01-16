export default class LayerPixelProcesser{
    static filterMap = {};
    constructor(imgData){
        this.imgData = imgData;
    }

    async process(name, args){
        let filter = LayerPixelProcesser.filterMap[name];

        let {data, width, height} = await filter.doFilter(this.imgData, args);

        return new ImageData(data, width, height);
    }

    static addFilter(Filter){
        let filter =  new Filter();
        let filterName = Filter.name;

        LayerPixelProcesser.filterMap[filterName] = filter;
    }
}
