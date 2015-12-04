var app = angular.module('angularApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/landing', {
            controller: 'MainController',
            templateUrl: 'templates/landing.htm'
        })
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'templates/login.htm'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);

app.controller('MainController', ['$scope',function($scope){

}]);


app.controller('LoginController', ['$scope',function($scope){

}]);
