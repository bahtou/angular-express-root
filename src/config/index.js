var extend = require('node.extend');
var env = process.env.NODE_ENV || 'development'
var allConfig = require('./environments/all');
var envConfig = require('./environments/' + env);

console.log('configuration:\n', extend(allConfig, envConfig, { env: env }));

module.exports = extend(allConfig, envConfig, { env: env });
