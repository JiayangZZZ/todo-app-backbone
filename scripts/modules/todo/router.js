
// router

define([

  'backbone',
  'todo/todo',
  'todo/todosView',
  'todo/todoView'

],function(

  Backbone,
  Todo,
  TodosView,
  TodoView

) {

  return Backbone.Router.extend({
    routes : {
      '' : 'getTodos',
      'todos/:id' : 'getOneTodo',
      'create' : 'create'
    },

    getTodos: function() {
      var todosView = new TodosView();
    },

    getOneTodo:  function(id) {
      var todo = new Todo();
      todo.id = id;
      console.log(todo.fetch());
      todo.fetch({
        success: function() {
          console.log(todo);
          var view = new TodoView(); //error
        }
      });
    },

    create: function() {

    }
  });

});
