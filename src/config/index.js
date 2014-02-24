var extend = require('node.extend');
var env = process.env.NODE_ENV || 'development'
var allConfig = require('./environments/all');
var envConfig = require('./environments/' + env);

console.log('configuration:\n', extend(true, allConfig, envConfig));

module.exports = extend(true, allConfig, envConfig);
