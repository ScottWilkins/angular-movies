
app.controller("HomeController", ['$scope', '$http', function($scope, $http) {
    $scope.vw = {}
    $scope.vw.search = function(text){
      $http.get('http://omdbapi.com/?s='+text).then(function(result){
          $scope.vw.data = result.data.Search
          console.log($scope.vw.data);
    })
  };
}])
