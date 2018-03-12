var myApp = angular.module('myApp', [])

.controller('mainController', ['$scope', function($scope) {
    $scope.name = "Main";





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
myApp.controller('secondController', ['$scope', function($scope) {
    $scope.name = "Second";
}])