var messageboard = angular.module('messageboard', [ 'templates', 'ngRoute', 'controllers', 'entangled' ] );

messageboard.config([ '$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: "index.html",
    controller: "MessageboardController"
  });
}]);

var controllers = angular.module('controllers',[]);