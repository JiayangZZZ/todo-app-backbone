
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

    initialize: function(collection) {
      // this.$todoList = $('.todo-list');
      this.collection = collection;
      // this.listenTo(collection, 'add', this.addOne);
      // collection.on('remove', this.removeOne);
      // this.listenTo(this.collection, 'remove', this.removeOne);
    },

    events: {
      'click .todo-list-item' : 'navigateTodo',
      'click .green-button' : 'navigateCreate'
    },

    /**
     * To HTML
     *
     * @return {string}
     * @api public
     */
    toHTML: function() {
      var html = '';
      this.collection.forEach(function(todo) {
        var todoView = new TodoView(todo);
        html += todoView.toHTML();
      });
      return html;
    },

    /**
     * Bind DOM
     *
     *
     */
    bindDOM: function() {

    },

    addOne: function(todo) {
      // var todoView = new TodoView(todo);
      // _this.$todoList.append(todoView.toHTML());
    },

    removeOne: function(models) {
      var _this = this;
      // console.log('selected element: ');
      // console.log($('[data-id=' + models.id + ']'));
      // console.log('removing from collection...');

    },

    navigateTodo: function(e) {
      e.preventDefault();
      var id = $(e.currentTarget).attr('data-id');
      console.log('Clicked todo: '+id);
      navigate('todos/'+id);
    },

    navigateCreate: function() {
      navigate('create');
    }

  });

});
