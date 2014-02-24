'use strict';

var db = require('../lib/db');

module.exports = function(app) {
  logger.info('initalize the database --', db);
  app.set('db', db);
};
