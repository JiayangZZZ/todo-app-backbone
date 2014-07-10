
define([

  'backbone',
  'todo/todo',
  'tmpl'

], function(

  Backbone,
  Todo,
  tmpl

) {


  return Backbone.View.extend({

    initialize: function(model) {
      this.model = model;
    },

    events: {
      'dblclick .body-container' : 'edit'
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

    /**
     * Todo To HTML
     *
     * @return {String}
     * @api public
     */
    todoToHTML: function() {
      return tmpl.todoTemplate(this.model.toJSON());
    },

    edit: function() {
      $('.title').html('asdfsdf');
      console.log('clicked');
    }
  });

});


