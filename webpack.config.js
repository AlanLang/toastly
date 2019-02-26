module.exports = {
  mode: 'production',
  devtool: 'eval',
  output: {
    library: 'Toastly',
    libraryTarget: 'umd',
    filename: 'toastly.min.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};