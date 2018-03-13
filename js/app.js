//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/js/pages/home.html',

        })
})

//Controller
weatherApp.controller('homeController', ['$scope', function($scope) {

}]);
//Controller
weatherApp.controller('forecastController', ['$scope', function($scope) {

}]);