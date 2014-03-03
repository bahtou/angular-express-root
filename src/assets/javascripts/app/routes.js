'use strict';

var aerApp = angular.module('aerApp');

aerApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: '/views/pages/about.html',
        controller: 'aboutController'
      })
      .when('/home', {
        templateUrl: '/views/pages/home.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
]);
