describe('MessageboardController', function(){

  var scope;
  var ctrl;
  
  beforeEach(module('messageboard'));
  beforeEach(inject(function($rootScope,$controller){
    scope = $rootScope.$new();
    ctrl = $controller('MessageboardController', {$scope: scope});
  }));
  
  describe('#post',function(){
    
    it('adds a message to the message_list',function(){
      scope.post('Ollie','First message');
      expect(scope.message_list[0].username).toEqual('Ollie');
      expect(scope.message_list[0].content).toEqual('First message');
    });
    
    it('adds a second message to the beginning of the array',function(){
      scope.post('Ollie','First message');
      scope.post('Ollie','Second message');
      expect(scope.message_list[0].content).toEqual('Second message');
    });
    
  });
  
});