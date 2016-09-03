var controllers = angular.module('controllers');

controllers.controller('MessageboardsController', ['$scope','Messageboard','CurrentUser','$location', function($scope,Messageboard,CurrentUser,$location){
  
  var loadUser = function(everythingElse){
    var interval = setInterval(function(){
      console.log('loop');
      if(typeof CurrentUser.name !== 'undefined'){
        $scope.username = CurrentUser.name;
        clearInterval(interval);
        everythingElse();
      }
    },1);
  };
  
  loadUser(function(){
  
    $scope.messageboard = Messageboard.new();
  
    $scope.addMessageBoard = function() {
      $scope.messageboard.$save(function(){
        console.log($scope.messageboard);
        $scope.$apply(function(){
          $scope.messageboard = Messageboard.new();
        });
      });
    };
  
    Messageboard.all(function(err, messageboards) {
      $scope.$apply(function() {
        console.log(messageboards);
        $scope.messageboards = messageboards;
      });
    });
    
    $scope.view = function(messageboardId){
      $location.path("/messageboards/" + messageboardId);
    };
    
  });
  
}]);