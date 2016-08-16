
app.controller('SearchControl', function($scope, $routeParams) {
  $scope.vw = {}
  $scope.vw.search = function(text){
    $http.get('http://omdbapi.com/?s='+$routeParams.num1).then(function(result){
        $scope.vw.data = result.data.Search
  })
};
})

app.controller('MainCtrl', function($scope, myService) {
  myService.getFooOldSchool(function(data) {
     $scope.foo = data;
  });
});
app.controller("HomeController",function($scope, $http) {
    $scope.vw = {}
    $scope.vw.search = function(text){
      $http.get('http://omdbapi.com/?s='+text).then(function(result){
          $scope.vw.data = result.data.Search
    })
  };
})
