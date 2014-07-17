
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

    el: '.body-container',

    initialize: function(collection) {
      this.$todoList = $('.todo-list');
      this.collection = collection;
      this.listenTo(collection, 'add', this.addOne);
      // collection.on('remove', this.removeOne);
      this.listenTo(this.collection, 'remove', this.removeOne);
    },

    events: {
      'click .todo-list-item' : 'todoNavigate'
    },

    render: function() {

      this.collection.forEach(function(todo) {
        var todoView = new TodoView(todo);
        $('.todo-list').append(todoView.toHTML());
      });
    },

    addOne: function(todo) {
      // var todoView = new TodoView(todo);
      // _this.$todoList.append(todoView.toHTML());
    },

    removeOne: function() {
      alert('removed one!');
    },

    todoNavigate: function() {
      console.log('clicked.');
      alert('clicked!');
    }

  });

});
