var controllers = angular.module('controllers');

controllers.controller('MessageboardController', ['$scope', function($scope){
  
  $scope.message_list = [];
  
  $scope.post = function(username,content){
    $scope.message_list.push({username: username, content: content});
  };
  
}]);