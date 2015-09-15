// var angular = require('../libs/angular/angular/angular.js');
var app = angular.module('angularApp', []);

app.controller('MainCtrl', ['$scope',function($scope){
    $scope.test = 'Hello world!';


    $scope.list = [
        {name : "john", work : "apple", age : "20"},
        {name : "bob", work : "microsoft", age : "23"}
    ];

}]);
