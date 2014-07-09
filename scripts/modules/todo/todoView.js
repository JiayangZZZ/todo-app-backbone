
define([

  'backbone',
  'dot',
  'todo/test',
  'todo/todo',
  'tmpl'

], function(

  Backbone,
  doT,
  testTodos,
  Todo,
  tmpl

) {


  var TodoView = Backbone.View.extend({

    initialize: function(model) {
      this.model = model;
    },

    /**
     * To HTML
     *
     * @return {String}
     * @api public
     */

    toHTML: function() {
      console.log(this.model.toJSON());
      return tmpl.itemTemplate(this.model.toJSON());
    }
  });

  return TodoView;
})


