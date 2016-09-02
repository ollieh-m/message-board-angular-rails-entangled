messageboard.factory('Message', function(Entangled){
  return new Entangled('ws://message-board-olliehm.c9users.io:8080/messages');
});