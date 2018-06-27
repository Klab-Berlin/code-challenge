angular.module('home', ['services.search']);


angular.module('home').config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/home/home.html',
    controller: 'HomeController'
  });
}]);


angular.module('home').controller('HomeController', ['$scope', 'Search', '$log', function($scope, Search) {
  $scope.searchResult = [];
  Search.query('test').then(function(result) {
    $scope.searchResult = result;
  });

}]);
