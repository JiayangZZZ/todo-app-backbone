//collection of todos

define([

  './todo',
  'backbone'

], function(

  Todo,
  Backbone

){
  return Backbone.Collection.extend({
    model: Todo,
    url: function(){
      return cf.origin + '/todos' + '?userId=' + cf.userId + '&accessToken=' + cf.accessToken;
    }
  });
});
