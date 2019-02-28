module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    library: 'Toastly',
    libraryTarget: 'umd',
    filename: 'toastly.js'
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