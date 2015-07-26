/**
 * to-do controller
 */

(function() { 'use strict';
    angular
        .module('toDo')
        .controller('ToDoCtrl', ToDoCtrl);

    ToDoCtrl.$inject = ['$scope'];

    function ToDoCtrl($scope) {
        $scope.greeting = 'Hello';
    }
})();