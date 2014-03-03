'use strict';

/* Controllers */

angular.module('aerApp.controllers', [])

  .controller('aboutController', function ($scope) {
  $scope.name = 'harry';
  })

  .controller('homeController', function ($scope) {
    $scope.app = {};
    $scope.app.title = 'AER';
    $scope.app.name = 'Angular-Express-Root';
  });

