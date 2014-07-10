
// router

define([

  'backbone',
  'todo/todo',
  'todo/todos',
  'todo/todosView',
  'todo/todoView',
  'tmpl'

],function(

  Backbone,
  Todo,
  Todos,
  TodosView,
  TodoView,
  tmpl

) {

  return Backbone.Router.extend({
    routes : {
      '' : 'getTodos',
      'todos/:id' : 'getOneTodo',
      'create' : 'create'
    },

    getTodos: function() {
      var todos = new Todos();
      todos.fetch({
        success: function() {
          this.$todoList = $('.real-todo-list');
          var _this = this;
          todos.forEach(function(todo) {
            var view = new TodoView(todo);
            _this.$todoList.append(view.toHTML());
          });
        }
      });
    },

    getOneTodo:  function(id) {
      var todo = new Todo();
      todo.id = id;
      todo.fetch({
        success: function() {
          console.log(todo);
          var view = new TodoView(todo);
          $('.body-container').html(view.todoToHTML());
        }
      });
    },

    create: function() {
      $('.body-container').html(tmpl.createTemplate());
    }
  });

});
