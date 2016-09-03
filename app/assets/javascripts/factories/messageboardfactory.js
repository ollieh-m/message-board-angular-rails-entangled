messageboard.factory('Messageboard', function(Entangled){
  var domain = window.location.host
  var Messageboard = new Entangled("ws://" + domain + "/messageboards");
  Messageboard.hasMany('messages');
  return Messageboard;
});