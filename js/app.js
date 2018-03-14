//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: 'js/pages/home.html',
                controlelr: 'homeController'

            })
            .when('/forecast', {
                templateUrl: 'js/pages/weather.html',
                controller: 'forecastController'
            })
    })
    //service
weatherApp.service("cityService", function() {
    this.city = "New York, NY";
})

//Controller
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
}]);
//Controller
weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
}]);