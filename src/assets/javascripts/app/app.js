'use strict';

require('./lib/angular-1.2.13/angular.js');
require('./lib/angular-1.2.13/angular-cookies');
require('./lib/angular-1.2.13/angular-route');
require('./lib/angular-1.2.13/angular-resource');
require('./lib/angular-1.2.13/angular-sanitize');

var aerApp = angular.module('aerApp', [
  'ngRoute',
  'ngCookies',
  'aerApp.services',
  'aerApp.controllers',
  'aerApp.directives',
  'aerApp.filters'
]);

angular.module('aerApp.services', []);
angular.module('aerApp.controllers', []);
angular.module('aerApp.directives', []);
angular.module('aerApp.filters', []);
