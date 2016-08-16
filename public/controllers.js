
app.controller('SearchController', function($scope, $routeParams, $http) {
  $scope.vw = {}
    $http.get('http://omdbapi.com/?s='+$routeParams.search).then(function(result){
        $scope.vw.data = result.data.Search
  })
})
app.controller("HomeController",function($scope, $http) {
})

app.controller('DetailController', function($scope, $routeParams, $http) {
  $scope.vw = {}
    $http.get('http://www.omdbapi.com/?i='+$routeParams.id+'&plot=full&r=json').then(function(result){
        $scope.vw.plot = result.data.Plot;
        $scope.vw.poster = result.data.Poster;
        $scope.vw.released = result.data.Released;
        $scope.vw.actors = result.data.Actors;
        $scope.vw.awards = result.data.Awards;
        $scope.vw.director = result.data.Director
        $scope.vw.genre = result.data.Genre;
        $scope.vw.rated = result.data.Rated;
        $scope.vw.runtime = result.data.Runtime;
        $scope.vw.imdbRating = result.data.imdbRating;

        console.log(result.data);
  })
})
