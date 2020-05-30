const path = require('path');
module.exports = {
  mode: 'production',
  entry: '/home/rakesh/Rakesh-m-r/webdev/TechVidya-2k19/script/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
};