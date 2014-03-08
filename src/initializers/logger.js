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
        filename: config.logging.filename,
        stringify: function(output) {
          var toWrite = _.pick(output, 'timestamp', 'level');

          delete output['timestamp'];
          delete output['level'];
          _.extend(toWrite, output);

          return JSON.stringify(toWrite, function (key, value) {
            return value instanceof Buffer
              ? value.toString('base64')
              : value;
          });
        }
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
