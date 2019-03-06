const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "src/index.html"),
 filename: "./index.html"
});

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/Toastly.tsx"),
  devtool: "inline-source-map",
  output: {
    library: 'Toastly',
    libraryTarget: 'umd',
    filename: 'toastly.js',
    path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [htmlWebpackPlugin],
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