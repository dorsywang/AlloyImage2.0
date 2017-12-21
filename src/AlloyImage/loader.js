import {loadImage, uniqueId, device} from "./util";
import AlloyImage from 'AlloyImage';
import EXIF from './exif';

let loader = async function(domOrImgString, option = {}){
    let { 
        fixOrientation = true
    } = option;

    if(typeof domOrImgString === 'string'){
        return await loadImage(domOrImgString);
    }else{
        if(domOrImgString instanceof Image){
            if(domOrImgString.complete){
                return domOrImgString;
            }

            return new Promise(rs =>{
                let success = function(){
                    rs(domOrImgString);

                    domOrImgString.removeEventListener('load', success);
                };
                domOrImgString.addEventListener('load', success);
            });
        }else if(domOrImgString instanceof File){
            let url = URL.createObjectURL(domOrImgString);
            let img = new Image();
            img.src = url;

            if(fixOrientation){
                return Promise.all([new Promise(rs => {
                    EXIF.getData(domOrImgString, function(){
                        img.exifdata = this.exifdata;
                        rs();
                       // alert(EXIF.getTag('Orientation'));
                    });
                }), loader(img)]).then(function(){
                    return img;
                });
            }

            return loader(img);
        }
    }
}

AlloyImage.loader = loader;
