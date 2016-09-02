var controllers = angular.module('controllers');

controllers.controller('MessageboardController', ['$scope','Message', function($scope,Message){

  $scope.message = Message.new();

  $scope.addMessage = function(newMessage) {
    newMessage.$save(function(err,message){
      if (err) {
        console.log('error');
      } else {
        console.log('no error');
        $scope.$apply(function(){
          $scope.message = Message.new();
        });
      }
    });
  };

  Message.all(function(err, messages) {
    $scope.$apply(function() {
      $scope.messages = messages;
    });
  });
  
}]);