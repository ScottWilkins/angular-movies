var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .otherwise({
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
});
