"use strict";angular.module("todoApp",["ngAnimate","ngAria","ngSanitize","ngTouch","ngMaterial","app.main","toDo"]),function(){angular.module("app.main",[])}(),function(){function a(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}angular.module("app.main").controller("MainCtrl",a),a.$inject=["$scope"]}(),function(){angular.module("toDo",[])}(),function(){function a(a){a.greeting="Hello"}angular.module("toDo").controller("ToDoCtrl",a),a.$inject=["$scope"]}();