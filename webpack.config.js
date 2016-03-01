var path       = require('path');
var webpack    = require('webpack');

// var srvHost         = 'http://localhost:8081',
//     publicPath      = srvHost+'/bundle/';

// check dependency build - https://github.com/webpack/webpack/issues/690

var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = {
  'react'       : { exp: 'React', imp: false },
  'react-router': { exp: false, imp: false },
  'react-dom'   : { exp: false, imp: false },
  'redux'       : { exp: false, imp: false },
  'react-redux' : { exp: false, imp: false },
  'jquery'      : { exp: 'jQuery', imp: false },
  'bootstrap'   : { exp: false, imp: false },
  'babel-polyfill'   : { exp: false, imp: false },
  'classnames'   : { exp: false, imp: false },
  'react-stamp'   : { exp: false, imp: false },
  'normalizr'   : { exp: false, imp: false },
  'redux-saga'   : { exp: false, imp: false },
  'redux-freeze-state'   : { exp: false, imp: false },
  'redux-thunk'   : { exp: false, imp: false },
  // 'babel-runtime'   : { exp: false, imp: false },
};


var config = {
  devtool: 'eval',
  entry: {
    app : "./assets/js/root.js",
    vendors: []
  },
  output: {
    path: './public/bundle',
    filename: "[name].js"
    // ,
    // publicPath: publicPath
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'js'
    ],
    alias: {}
  },

  module: {
    noParse: [],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          // plugins: ['transform-runtime', 'transform-object-assign'],
          // plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ __BROWSER_PACK__: true }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]

};

Object.keys(deps).forEach(function(depKey) {
  var dep = deps[depKey];

  config.entry.vendors.push(depKey);

  if (dep.exp) {
    config.module.loaders.push({ test: require.resolve(depKey), loader: 'expose?' + dep.exp });
  }

  // if (dep.imp) {
  //   imp = { test: dep.p, loader: 'imports?' + dep.imp };
  //   config.module.loaders.push(imp);
  // }
});

module.exports = config;
