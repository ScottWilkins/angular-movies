var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

      .when('/search/:search', {
        templateUrl: 'home.html',
        controller: 'SearchController'
      })
      .otherwise({
        templateUrl: 'movie.html',
        controller: 'HomeController'
      })
});
