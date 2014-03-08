'use strict';

var express = require('express');
var path = require('path');
var assetPipeline = require('../lib/assetPipeline');
var config = require('../config');

module.exports = function(app) {
  // if(config.env === 'test') { return; }

  app.use(assetPipeline.assets());
  app.use(express.static(path.join(config.root, 'assets')));
  app.use('/views', express.static(path.join(config.root, 'assets', 'views')));
};
