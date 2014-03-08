'use strict';

var path = require('path');


module.exports = {

  port: process.env.PORT || 3030,
  root: path.normalize(path.join(__dirname, '..', '..')),

  logging: {
    level: 'info',
    filename: path.normalize(path.join(__dirname, '..', '..', '..', 'logs', 'my-web-app.log')),
    colorize: false,
    fileLogging: false
  },

  assets: {
    precompiled: true
  }

};
