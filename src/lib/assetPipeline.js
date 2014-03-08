'use strict';

var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var rack = require('smaller-asset-rack');
var config = require('../config');

var STYLESHEETS = [
  'application.css.less'
];

var JAVASCRIPTS = [
  'application.js',
  'application-ie.js'
];

var assets = function() {
  var assets;
  var imageAssets;
  var fontAssets;
  var cssAssets;
  var jsAssets;

  imageAssets = [new rack.StaticAssets({
    urlPrefix: '/assets',
    dirname: path.join(config.root, 'assets', 'images'),
    watch: config.env === 'development' ? 'recursive' : false
  })];

  fontAssets = [new rack.StaticAssets({
    urlPrefix: '/assets/fonts',
    dirname: path.join(config.root, 'assets', 'fonts'),
    watch: config.env === 'development' ? 'recursive' : false
  })];

  cssAssets = _.map(STYLESHEETS, function(filename) {
    return new rack.LessAsset({
      url: '/assets/' + filename.replace('.less', ''),
      filename: path.join(config.root, 'assets', 'stylesheets', filename),
      compress: config.assets.precompiled,
      watch: config.env === 'development' ? 'recursive' : false
    });
  });

  jsAssets = _.map(JAVASCRIPTS, function(filename) {
    return new rack.BrowserifyAsset({
      url: '/assets/' + filename,
      filename: path.join(config.root, 'assets', 'javascripts', filename),
      compress: config.assets.precompiled,
      watch: config.env === 'development' ? 'recursive' : false
    });
  });

  assets = new rack.Rack(imageAssets
    .concat(fontAssets)
    .concat(cssAssets)
    .concat(jsAssets));

  return assets;
};

module.exports.assets = assets;
