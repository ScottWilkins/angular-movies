
app.controller('SearchController', function($scope, $routeParams, $http) {
  $scope.vw = {}
    $http.get('http://omdbapi.com/?s='+$routeParams.search).then(function(result){
        $scope.vw.data = result.data.Search
  })
})


app.controller("HomeController",function($scope, $http) {
  //   $scope.vw = {}
  //   $scope.vw.search = function(text){
  //     $http.get('http://omdbapi.com/?s='+text).then(function(result){
  //         $scope.vw.data = result.data.Search
  //   })
  // };
})
