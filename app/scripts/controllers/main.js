'use strict';

/**
 * @ngdoc function
 * @name todoGithubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoGithubApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
