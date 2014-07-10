
define([

  'backbone',
  'todo/todo',
  'tmpl'

], function(

  Backbone,
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
    },

    ttoHTML: function() {
      return tmpl.todoBody(this.model.toJSON());
    }
  });

  return TodoView;
});


