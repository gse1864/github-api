var id = "3257a93c96b37cf80ae9";
var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
var param = "?3257a93c96b37cf80ae9=" + id + "&45becb1dda65f5af435cb81048b8791bd02440f9=" + sec;

var app = angular.module("githubAPI");

app.service("githubService", function($http){
    this.getUser = function(searchText) {
        return $http({
            method: "GET",
            url: "https://api.github.com/users/" + searchText
        });
    }
});