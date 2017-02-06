export default AlloyImage => {
    Object.defineProperties(AlloyImage.prototype,{
        width:{
            get: function(){
                 return this.canvas.width;
            },

            set: function(w){
                this.then(() => {
                    this.canvas.width = w;
                });

                return this;
            }
        },

        height:{
            get: function(){
                return this.canvas.height; 
            },

            set: function(h){
                this.then(() => {
                    this.canvas.height = h;
                });

                return this;
            }
        }
    });
};
