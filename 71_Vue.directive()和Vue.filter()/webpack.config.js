const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'xuni',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    compress: false,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.vue$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader:'vue-loader'
      },
    ],
  },
  plugins:[
      new VueLoaderPlugin()
  ]
};
