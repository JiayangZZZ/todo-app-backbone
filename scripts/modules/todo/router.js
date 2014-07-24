
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

    //fetch the todo list
    getTodos: function() {
      $('.body-container').empty();
      $('.body-container').append(tmpl.todosTemplate());
      // app.models.todos = new Todos();
      app.models.todos.fetch({
        success: function() {
          var todosView = new TodosView(app.models.todos);
          todosView.setElement('.todos');
          console.log(todosView.el);
          $('.todo-list').append(todosView.toHTML());
        }
      });
    },

    //fetch one todo
    getOneTodo:  function(id) {
      // $('.body-container').empty();
      var todo = new Todo();
      todo.id = id;
      todo.fetch({
        success: function() {
          // console.log(todo);
          var todoView = new TodoView(todo);
          console.log(todoView);
          $('.body-container').append(todoView.todoToHTML());
          todoView.setElement('.todo');
          console.log(todoView.el);
        }
      });
    },

    //create new todo
    create: function() {
      $('.body-container').empty();
      var todo = new Todo();
      var form = new FormView(todo);
      form.toHTML();
      form.setElement('.form');
      console.log(form.el);
    }
  });

});
