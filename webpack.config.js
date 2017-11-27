const path = require('path');
const webpack = require('webpack');

const entry = { home: './frontend/home/home.js' };
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, './app/public/dist/'),
    publicPath: 'public/dist/',
    filename: '[name].build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // 字体icon文件的loader
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue',
      iv: 'iview/dist/',
      // iviewcss: 'iview/dist/styles/',
      utils: path.resolve(__dirname, './utils'),
    },
    extensions: [ '*', '.js', '.vue', '.json', '.css' ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    port: 9000,
    hot: true,
    // use these host for proxy use
    host: '0.0.0.0',
    contentBase: './app/public',
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  console.log('开发环境');
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
