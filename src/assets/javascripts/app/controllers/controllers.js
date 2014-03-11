'use strict';

/* Controllers */

var aerAppControllers = angular.module('aerApp.controllers', []);

aerAppControllers.controller('aboutController', function ($scope) {
  $scope.name = 'Roberto';
  $scope.todo = 'coding';
});

aerAppControllers.controller('homeController', function ($scope) {
  var app = {};
  app.title = 'AER';
  app.projectName = 'Angule-Express-Root';

  $scope.app = app;
  $scope.todo = 'what to do next?';
});
