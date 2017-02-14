import AlloyImage, {register} from './core';

import Filter from './filter';
import Alteration from './alteration';

import addLayer from './addLayer';
import act from './act';
import size from './size';
import show from './show';
import clone from './clone';
import preview from './preview'

register({
    addLayer,
    act,
    size,
    show,
    clone,
    preview
});


export default AlloyImage;
export {Filter, Alteration};
