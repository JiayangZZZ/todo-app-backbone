
// router

define([

  'backbone',
  './todo',
  './todos',
  './todosView',
  './todoView',
  './formView',
  'tmpl'

],function(

  Backbone,
  Todo,
  Todos,
  TodosView,
  TodoView,
  FormView,
  tmpl

) {

  return Backbone.Router.extend({
    routes : {
      '' : 'getTodos',
      'todos/:id' : 'getOneTodo',
      'create' : 'create'
    },

    getTodos: function() {
      // $('.body-container').empty();
      // $('.body-container').append('<div class="button">');
      // $('.body-container').append('<ul class="todo-list">');

      app.models.todos = new Todos();
      app.models.todos.fetch({
        success: function() {
          console.log(app.models.todos.toJSON());
          var todosView = new TodosView(app.models.todos);
          $('.body-container').append('<p>what the f**k</p>');
          // $('.body-container').append(todosView.toHTML());
          // todosView.bindDOM();
        }
      });
    },

    getOneTodo:  function(id) {
      // $('.body-container').empty();
      var todo = new Todo();
      todo.id = id;
      todo.fetch({
        success: function() {
          // console.log(todo);
          var todoView = new TodoView(todo);
          // todoView.el = '.body-container';
          $('.body').html(todoView.todoToHTML());
        }
      });
    },

    create: function() {
      var todo = new Todo();
      var formView = new FormView(todo);
      formView.toHTML();
    }
  });

});
