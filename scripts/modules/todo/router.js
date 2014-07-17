
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
      $('.body-container').empty();
      $('.body-container').append('<div class="button">');
      $('.body-container').append('<ul class="todo-list">');

      app.models.todos = new Todos();
      app.models.todos.fetch({
        success: function() {
          $('.button').html(tmpl.createButton());
          var todosView = new TodosView(app.models.todos);
          todosView.render();
        }
      });
    },

    getOneTodo:  function(id) {
      $('.body-container').empty();
      var todo = new Todo();
      todo.id = id;
      todo.fetch({
        success: function() {
          // console.log(todo);
          var view = new TodoView(todo);
          $('.body-container').html(view.todoToHTML());
        }
      });
    },

    create: function() {
      var todo = new Todo();
      var form = new FormView(todo);
      form.toHTML();
    }
  });

});
