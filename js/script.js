var myApp = angular.module('myApp', ['ngRoute']);

//customized service
myApp.service('nameService', function() {
    var self = this;
    this.name = "John";
    this.namelength = function() {
        return self.name.length;
    };
});

myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'js/pages/main.html',
            controller: 'mainController'
        })

    .when('/second/', {
            templateUrl: 'js/pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'js/pages/second.html',
            controller: 'secondController'
        })
})



myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    // $scope.name = nameService.name;
    // $log.main = "Property from main";
    // $scope.$watch('name', function() {
    //     nameService.name = $scope.name;
    // });

    // $log.log(nameService.name);
    // $log.log(nameService.namelength());

    // $scope.person = {
    //     name: 'John',
    //     address: "55 Main st, NY 1111"
    // }
    // $scope.person = {
    //     name: "Scorpio",
    //     address: "555 Main st",
    //     city: "New York",
    //     state: "NY",
    //     zip: "111"
    // }
    $scope.people = [{
            name: "Scorpio",
            address: "555 Main st",
            city: "New York",
            state: "NY",
            zip: "111"
        },
        {
            name: "Ben",
            address: "12 Main st",
            city: "New York",
            state: "NY",
            zip: "1131"
        },
        {
            name: "Tom",
            address: "555 Meain st",
            city: "New York",
            state: "CB",
            zip: "11321"
        }
    ]

    $scope.formattedAddress = function(person) {
        return person.address + ", " + person.city + ", " + person.city + ", " + person.state + "," + person.zip
    }




    // $http server
    // $http({
    //     method: 'GET',
    //     url: 'https://burning-airline.herokuapp.com/flights.json'
    // }).then(function(results) {
    //     $scope.flights = results.data;
    //     console.log(results);
    // }, function(error) {
    //     console.log(data);
    // });
    // $scope.newFlight = '';

    // $scope.addFlight = function() {
    //     $http({
    //         method: 'POST',
    //         url: 'https://burning-airline.herokuapp.com/flights',
    //         data: { 'origin': $scope.newFlight, "destination": "Ho Chi Minh City", "flight_number": "BCJ600" }
    //     }).then(function(results) {
    //         $scope.flights.push($scope.newFlight);
    //         $scope.newFlight = '';
    //         console.log(results.data);

    //     })

    // }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

    $scope.name = nameService.name;
    $scope.num = $routeParams.num || 1;
    $log.second = "Property from second";
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

}]);
//customised directive
myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        // template: '<a href = "#" class = "list-group-item"><h2 class = "list-group-time-heading">Name:</h2><p class = "list-group-item-text">555 Main St.,New York, NY 111</p></a>',
        templateUrl: 'js/pages/search.html',
        scope: {
            //poke a hole , text
            // personName: "@", //assume same name of attribute
            // personAddress: "@"
            //pass an object
            // personObjectSpecial :'@personObject',
            personObject: "=",
            formattedAddressFunction: "&"
        },
        // compile: function(elem, attr) {
        //     console.log('compiling...');
        //     console.log(elem.html());

        //     if (scope.)

        //     return {
        //         pre: function(scope, element, attrs) {
        //             console.log("pre-link");
        //             console.log(element);
        //         },
        //         post: function(scope, element, attrs) {
        //             console.log("post-link");
        //             console.log(element);
        //         }
        //     }

        // }

        transclude: true
    };
})