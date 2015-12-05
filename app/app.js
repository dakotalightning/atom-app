'use strict';

var app = angular.module('angularApp', [
    'ngRoute',
    'ngResource'
]);

app.run(['$rootScope', function ($rootScope) {

}])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            controller: 'DashboardController',
            templateUrl: 'templates/dashboard.html'
        })
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'templates/login.html'
        })
        .when('/signup', {
            controller: 'SignupController',
            templateUrl: 'templates/signup.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);

/* Filters */
// need load the moment.js to use this filter.
angular.module('angularApp').filter('fromNow', function() {
    return function(date) {
        return moment(date).fromNow();
    }
});

app.controller('AppController', ['$scope', function($scope) {

        $scope.app = {
            name: 'CMS Atom App',
            version: '2.1.0',
            // for chart colors
            color: {
                primary: '#7266ba',
                info: '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger: '#f05050',
                light: '#e8eff0',
                dark: '#3a3f51',
                black: '#1c2b36'
            },
            settings: {
                themeID: 1,
                navbarHeaderColor: 'bg-black',
                navbarCollapseColor: 'bg-white-only',
                asideColor: 'bg-black',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false,
                asideDock: false,
                container: false
            }
        }

    }
]);

app.controller('DashboardController', ['$scope', function($scope){

}]);

app.controller('SearchController', ['$scope', function($scope){
    $scope.signup = function () {
        $location.path( "/dashboard" )
    }
}]);

app.controller('SignupController', ['$scope', function($scope){

}]);
app.controller('LoginController', ['$scope','$location', function($scope, $location){
    $scope.login = function () {
        $location.path( "/dashboard" )
    }
}]);
