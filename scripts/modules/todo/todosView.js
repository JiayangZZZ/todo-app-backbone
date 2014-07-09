
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

    var TodosView = Backbone.View.extend({
      initialize: function(collection) {
        this.collection = collection;
        this.render();
        this.$todoList = $('.real-todo-list');
      },
      render: function() {
        var _this = this;
        console.log('todos view rendering...');
        // todos.forEach(function(todo) {
        //   var view = new TodoView({model: todo});
        //   $('.real-todo-list').append(view.render().el);
        // })

        // console.log('adfadfadsf');

        var todos = new Todos();
        todos.fetch({
          success: function() {
            todos.forEach(function(todo) {
              var view = new TodoView(todo);
              _this.$todoList.append(view.toHTML());
            });
          }
        });
      }
    });

    // var todoView = new TodoView();
    return(TodosView);

  })
