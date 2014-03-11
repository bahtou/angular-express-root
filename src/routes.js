'use strict';

var middleware = require('./middleware');
var controllers = require('./controllers');
var config = require('./config');

module.exports = function(app) {

  /*
   * API
   */

  app.use(function(req, res) {
    res.render('index');
  });

};
