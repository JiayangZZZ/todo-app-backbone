
define([

  'backbone',
  'todo/todos',
  'todo/todoView'

],
function(

  Backbone,
  Todos,
  TodoView

){
  /**
  *TodosView Constructor
  *
  *@return (what? constructor?)
  *@api might-be-public
  */

  return Backbone.View.extend({
    initialize: function(collection) {
      this.collection = collection;
    }
  });

});
