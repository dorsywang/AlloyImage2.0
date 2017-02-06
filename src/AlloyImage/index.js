import AlloyImage from './core';

import Filter from './filter';
import Alteration from './alteration';

import addLayer from './addLayer';
import registerAct from './act';
import registerSize from './size';


addLayer(AlloyImage);
registerAct(AlloyImage);
registerSize(AlloyImage);


export default AlloyImage;
export {Filter, Alteration};
