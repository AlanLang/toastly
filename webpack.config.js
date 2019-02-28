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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "targets": {
                  "esmodules": true
                }
              }
            ]
          ]
        }
      }
    ]
  }
};