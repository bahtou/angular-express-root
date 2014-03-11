'use strict';

/**
 * Module dependencies.
 */

var express = require('express');

var app = express();
var config = require('./config');
var routes = require('./routes');
var initializers = require('./initializers');
var path = require('path');
var http = require('http');

// all environments
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.favicon());

//initialize the database
initializers.db(app);

if (config.logging.level === 'debug') {
  // todo, pipe this through a winston stream
  app.use(express.logger('dev'));
}

//initialize assets
initializers.assets(app);

app.use(app.router);

// development only
if ('development' == config.env) {
  app.use(express.errorHandler({showStack: true, dumpExceptions: true}));
  app.locals.pretty = true;
}

routes(app);

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
