'use strict';

var path = require('path');
var config = require('../config');
var i18n = require('i18next');

i18n.init({
  ignoreRoutes: ['/assets', '/public', '/views'],
  resGetPath: path.join(config.root, 'locales', '__lng__.json'),
  fallbackLng: 'en',
  saveMissing: false,
  debug: config.logging.level === 'debug',
  supportedLngs: ['en', 'es']
});

i18n.functions.log = function(msg) {
  logger.debug('i18next:', msg);
};

module.exports = i18n;
