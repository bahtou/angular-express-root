'use strict';

/* Controllers */

var aerAppControllers = angular.module('aerApp.controllers', []);

aerAppControllers.controller('aboutController', function ($scope) {
  $scope.name = 'Roberto';
});

aerAppControllers.controller('homeController', function ($scope) {
  $scope.todo = 'what to do next?';
});
