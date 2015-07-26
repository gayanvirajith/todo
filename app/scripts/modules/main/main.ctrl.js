/**
 * Main controller
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }
})();
