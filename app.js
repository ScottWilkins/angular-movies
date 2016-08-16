var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

      .when('/search/:search', {
        templateUrl: 'movies.html',
        controller: 'SearchController'
      })
      .when('/detail/:id', {
        templateUrl: 'detail.html',
        controller: 'DetailController'
      })
      .when('/', {
        templateUrl: 'home.html'
      })
      .otherwise({
        templateUrl: 'error.html'
      })
});
