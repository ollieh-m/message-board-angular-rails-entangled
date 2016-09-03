var messageboard = angular.module('messageboard', [ 'templates', 'ngRoute', 'controllers', 'entangled' ] );

messageboard.config([ '$routeProvider', function($routeProvider){
  $routeProvider.when("/",{
    templateUrl: "messageboards.html",
    controller: "MessageboardsController"
  }).when("/messageboards/:id",{
    templateUrl: "messageboard.html",
    controller: "MessageboardController"
  });
}]);

messageboard.directive('currentuser', ['CurrentUser', function(CurrentUser) {
  return function(scope, element, attrs) {
    CurrentUser.name = attrs.name;
  };
}]);

var controllers = angular.module('controllers',[]);