var controllers = angular.module('controllers');

controllers.controller('MessageboardController', ['$scope','Message', 'CurrentUser', function($scope,Message,CurrentUser){
  
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
  
    $scope.message = Message.new({username: $scope.username});
  
    $scope.addMessage = function(newMessage) {
      newMessage.$save(function(err,message){
        if (err) {
        } else {
          $scope.$apply(function(){
            $scope.message = Message.new({username: $scope.username});
          });
        }
      });
    };
  
    Message.all(function(err, messages) {
      $scope.$apply(function() {
        $scope.messages = messages;
      });
    });
    
  });
  
}]);