module.exports = {
  mode: 'production',
  output: {
    library: 'Toastly',
    libraryTarget: 'umd',
    filename: 'toastly.min.js'
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