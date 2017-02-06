import AlloyImage from './AlloyImage';

import toGray from "./filter/toGray";
import corrode from "./filter/corrode";
import darkCorner from "./filter/darkCorner";
import dotted from "./filter/dotted";
import embossment from './filter/embossment';
import gaussBlur from './filter/gaussBlur';
import lapOfGauss from './filter/lapOfGauss';
import mosaic from './filter/mosaic';
import noise from './filter/noise';
import oilPainting from './filter/oilPainting';
import posterize from './filter/posterize';
import sepia from './filter/sepia';
import sharp from './filter/sharp';
import toReverse from './filter/toReverse';
import toThresh from './filter/toThresh';

import brightness from './alteration/brightness';
import curve from './alteration/curve';
import gamma from './alteration/gamma';
import seletiveColor from './alteration/seletiveColor';
import setHSI from './alteration/setHSI';

let {addFilter, addAlteration} = AlloyImage;

addFilter(toGray);
addFilter(corrode);
addFilter(darkCorner);
addFilter(dotted);
addFilter(embossment);
addFilter(gaussBlur);
addFilter(lapOfGauss);
addFilter(mosaic);
addFilter(noise);
addFilter(oilPainting);
addFilter(posterize);
addFilter(sepia);
addFilter(sharp);
addFilter(toReverse);
addFilter(toThresh);

addAlteration(brightness);
addAlteration(curve);
addAlteration(gamma);
addAlteration(seletiveColor);
addAlteration(setHSI);

window.AlloyImage = AlloyImage;
