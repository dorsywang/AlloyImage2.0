import LayerPixelProcesser from './layerPixelProcesser';
import AlloyImage from 'AlloyImage';

function act(method, ...args){
    this.then(async () => {
        console.log('act', method);
        await this._doAct(method, args);
    });

    return this;
}

async function _doAct(method, args){
    let layerPixelProcesser = new LayerPixelProcesser(this.imgData);

    let imgData = await layerPixelProcesser.process(method, args);

    this.imgData = imgData;
}

AlloyImage.extend(act);
AlloyImage.extend(_doAct);

AlloyImage.addFilter = filter => {
    LayerPixelProcesser.addFilter(filter);
};

AlloyImage.addAlteration = alteration => {
    LayerPixelProcesser.addFilter(alteration);
};