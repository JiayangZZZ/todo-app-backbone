
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
      $('.input-todo-title').focus();
      this.model = model;
    },

    events: {
      'keypress .input-todo-title' : 'moveToDes',
      'click .one-button>.green-button' : 'saveNew'
    },

    moveToDes: function(e) {
      console.log('entering..');
      if(e.which == 13 && this.$('.input-todo-title').val().trim()){
        $('.input-todo-description').focus();
      }
    },

    saveNew: function() {
      var _this = this;

      console.log('saving new todo..');
      var title = this.$('.input-todo-title').val(),
          description = this.$('.input-todo-description').val();
      console.log(title);
      console.log(description);
      if(title) {
        this.model.set({
          title: title,
          description: description
        });
        this.model.save(null, {
          success: function() {
            console.log('New todo id: '+ _this.model.get('id'));
            navigate('todos/'+_this.model.get('id'));
          }
        });

      }
      else {
        alert('Title must not be empty.');
      }
    },

    /**
     * To HTML
     *
     * @return {String}
     * @api public
     */
    toHTML: function() {
      return $('.body-container').html(tmpl.createTemplate());
    }
  });

});
