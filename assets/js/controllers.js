var twitterApp = angular.module('twitterApp', ['ngResource']);

twitterApp.controller('TweetController', function ($scope, $resource) {
    var tweets = $resource('/tweet/timeline');

    $scope.tweets = tweets.query();
});