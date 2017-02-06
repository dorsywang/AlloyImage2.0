export default class LayerPixelProcesser{
    static filterMap = {};
    static alterationMap = {};
    constructor(imgData){
        this.imgData = imgData;
    }

    async process(name, args){
        name = name.toLocaleLowerCase();

        let filter = LayerPixelProcesser.filterMap[name];
        let alteration = LayerPixelProcesser.alterationMap[name];

        let doProcess;
        if(alteration){
            doProcess = alteration::alteration.doProcess;
        }else{
            doProcess = filter::filter.doProcess;
        }

        let {data, width, height} = await doProcess(this.imgData, args);

        return new ImageData(data, width, height);
    }

    static addFilter(Filter){
        let filter =  new Filter();
        let filterName = Filter.name.toLocaleLowerCase();
        let filterCName = filter.cname;

        LayerPixelProcesser.filterMap[filterName] = filter;

        if(filterCName){
            LayerPixelProcesser.filterMap[filterCName] = filter;
        }
    }

    static addAlteration(Alteration){
        let alteration =  new Alteration();
        let alterationName = Alteration.name.toLocaleLowerCase();
        let alterationCName = alteration.cname;

        LayerPixelProcesser.alterationMap[alterationName] = alteration;

        if(alterationCName){
            LayerPixelProcesser.alterationMap[alterationCName] = alteration;
        }
    }
}
