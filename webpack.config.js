module.exports = {
  mode: "production",
  devtool: "cheap-module-source-map",
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
  },
 devServer: {
   port: 3002
 }
};