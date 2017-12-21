import LayerPixelProcesser from './layerPixelProcesser';
import AlloyImage from 'AlloyImage';

function act(method, ...args){
    this._doAct(method, args);

    return this;
}

function _doAct(method, args){
    let layerPixelProcesser = new LayerPixelProcesser(this.imgData);

    let imgData = layerPixelProcesser.process(method, args);

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
