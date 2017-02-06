import AlloyImage, {register} from './core';

import Filter from './filter';
import Alteration from './alteration';

import addLayer from './addLayer';
import act from './act';
import size from './size';
import show from './show';
import clone from './clone';

register({
    addLayer,
    act,
    size,
    show,
    clone
}, AlloyImage);


export default AlloyImage;
export {Filter, Alteration};
