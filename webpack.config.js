module.exports = {
    entry: './src/core.js',
    output: {
        filename: 'alloyimage-2.0.js',
        path: './dist'
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
    
};
