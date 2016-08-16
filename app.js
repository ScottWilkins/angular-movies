var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .otherwise({
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      $locationProvider.html5Mode(true);
});
