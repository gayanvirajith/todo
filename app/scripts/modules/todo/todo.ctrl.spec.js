'use strict';

describe('Controller: ToDoCtrl', function () {

  // load the controller's module
  beforeEach(module('toDo'));

  var ToDoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToDoCtrl = $controller('ToDoCtrl', {
      $scope: scope
    });
  }));

  describe('Initialization', function() {
    it('should attach greeting to the scope', function () {
      expect(scope.greeting).toBeDefined();
    });

    it('should initialize greeting with `hello`', function() {
      expect(scope.greeting).toEqual('Hello');
    });
  });
});