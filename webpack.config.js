module.exports = {
  output: {
    library: 'Toastly',
    libraryTarget: 'umd',
    filename: 'toastly.js'
  },
  module: {
    rules: [{
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015'],
            plugins:["transform-runtime"]
        }
    }, ],
  }
};