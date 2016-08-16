var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

      .when('/search/:search', {
        templateUrl: 'home.html',
        controller: 'SearchController'
      })
      .when('/detail/:id', {
        templateUrl: 'detail.html',
        controller: 'DetailController'
      })
      .otherwise({
        templateUrl: 'movie.html',
        controller: 'HomeController'
      })
});
