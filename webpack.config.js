var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'alloyimage-2.0.js',
        path: './dist'
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },

    resolve:{
        alias: {
            AlloyImage: path.resolve(__dirname, "./src/AlloyImage")
        }
    }
    
};
