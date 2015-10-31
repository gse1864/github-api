var app = angular.module("githubAPI");

app.controller("githubController", ["githubService", "$scope",          function(githubService, $scope){
    $scope.getUserData = githubService.getUser($scope.searchText)
        .then(function(response){
            $scope.user = response.data;
    })
}]);