var controllers = angular.module('controllers');

controllers.controller('MessageboardController', ['$scope','Messageboard', 'CurrentUser', '$routeParams', '$location', function($scope,Messageboard,CurrentUser,$routeParams,$location){
  
  var loadUser = function(everythingElse){
    var interval = setInterval(function(){
      if(typeof CurrentUser.name !== 'undefined'){
        $scope.username = CurrentUser.name;
        clearInterval(interval);
        everythingElse();
      }
    },1);
  };
  
  loadUser(function(){
    
    Messageboard.find($routeParams.id, function(err, messageboard) {
      $scope.$apply(function() {
        $scope.messageboard = messageboard;
        $scope.messageboard.messages().all(function(err, messages) {
          $scope.$apply(function() {
            $scope.messages = messages;
          });
        });
        $scope.message = $scope.messageboard.messages().new({username: $scope.username});
      });
    });
    
    $scope.addMessage = function(newMessage) {
      newMessage.$save(function(err,message){
        if (err) {
        } else {
          $scope.$apply(function(){
            $scope.message = $scope.messageboard.messages().new({username: $scope.username});
          });
        }
      });
    };
    
    $scope.back = function(){
      $location.path("/");
    };
    
  });
  
}]);