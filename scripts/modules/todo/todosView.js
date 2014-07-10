
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
      this.render();
      this.$todoList = $('.real-todo-list');
    },
    render: function() {
      var _this = this;

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

});
