messageboard.factory('Message', function(Entangled){
  var domain = window.location.host
  return new Entangled("ws://" + domain + "/messages");
});