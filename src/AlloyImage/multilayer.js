import AlloyImage from 'AlloyImage';

let addLayer = function(aiObj, method, dx, dy){
  this.layers.push([aiObj, method, dx, dy]);

  return this;
};

AlloyImage.extend(addLayer);
