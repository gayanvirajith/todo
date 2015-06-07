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
      { name: 'HTML5 Boilerplate', done: false},
      { name: 'AngularJS', done: false },
      { name: 'Karma', done: false }
    ];
  });
