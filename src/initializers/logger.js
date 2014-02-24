'use strict';

var config = require('../config');
var winston = require('winston');

var loggingIt;

if (config.logging.fileLogging) {
  loggingIt = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        level: config.logging.level,
        colorize: config.logging.colorize,
        timestamp: true,
        filename: config.logging.filename
      })
    ]
  });
} else {
  loggingIt = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level: config.logging.level,
        colorize: config.logging.colorize
      })
    ]
  });
}

GLOBAL.logger = loggingIt;

module.exports = loggingIt;
