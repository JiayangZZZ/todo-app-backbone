
define([

  'backbone',
  'todo/todos',
  'todo/todoView',
  'tmpl'

],
function(

  Backbone,
  Todos,
  TodoView,
  tmpl

){
  /**
  *TodosView Constructor
  *
  *@return (what? constructor?)
  *@api might-be-public
  */

  return Backbone.View.extend({

    el: '.body-container', //should be '.todos'

    initialize: function(collection) {
      // this.$todoList = $('.todo-list');
      this.collection = collection;
      // this.listenTo(collection, 'add', this.addOne);
      // collection.on('remove', this.removeOne);
      // this.listenTo(this.collection, 'remove', this.removeOne);
    },

    events: {
      'click .todo-list-item' : 'todoNavigate'
    },

    // render: function() {
    //   $('.body').html(tmpl.body());
    //   $('.button').html(tmpl.createButton());
    //   this.collection.forEach(function(todo) {
    //     var todoView = new TodoView(todo);
    //     $('.todo-list').append(todoView.toHTML());
    //   });
    // },

    toHTML: function() {
      // return tmpl.todosTemplate({
      //   button : tmpl.createButton(),
      //   todoList : 'ss'
      // })
      return 'yes';
    },

    binDOM: function() {

    },

    setElement: function(el) {
      this.el = el;
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
