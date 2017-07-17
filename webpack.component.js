// your module webpack config

const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel",
    }, {
      test: /\.md$/,
      loader: 'raw'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /.less$/,
      loader: 'style!css!postcss!less'
    }],
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
  ],
  externals: {
    'react': 'React',
    'React': 'React',
    'ReactDOM': 'ReactDOM',
    'react-dom': 'ReactDOM',
    'antd': 'antd',
  },
  output: {
    libraryTarget: 'umd',
  },
};
