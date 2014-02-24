'use strict';

var aerApp = angular.module('aerApp');

aerApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routerProvider
      .when('/about', {
        templateUrl: '/views/pages/about.html',
        controller: 'aboutController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
]);
