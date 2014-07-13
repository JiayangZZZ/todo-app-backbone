
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

    el: '.body-container',

    initialize: function(model) {
      this.model = model;
      model.on({
        'change:title' : this.titleUpdate,
        'change:description' : this.descriptionUpdate
      });
    },

    events: {
      'click .red-button' : 'delete',
      'dblclick .title' : 'edit',
      'dblclick .description' : 'edit',
      'keypress .input-todo-title' : 'moveToDes'
    },

    // delete: function() {
    //   this.model.destroy({
    //     success: function(model, res) {
    //       var router = new Backbone.Router();
    //       router.navigate('/', {trigger: true, replace: true});
    //       console.log('todo deleted.');
    //     }
    //   })
    // },

    delete: function() {
      this.remove();
      var router = new Backbone.Router();
      router.navigate('/', {trigger: true, replace: true});
    },

    edit: function() {
      alert('edit');
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

    moveToDes: function(e) {
      console.log('entering..');
      if( e.which !== 13 || !this.$('.input-todo-title').val().trim() ) {
        return;
      }
      console.log('asdfadf');
      $('.input-todo-description').focus();
    }
  });

});


