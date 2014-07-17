
define([

  'backbone',
  'todo/todo',
  'tmpl',
  'todo/router'

], function(

  Backbone,
  Todo,
  tmpl,
  Router

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
      'click .save>.one-button>.green-button' : 'saveEdit',
      'keypress .title-editing' : 'moveToDes'
    },

    delete: function() {
      console.log('app.models.todos: '+app.models.todos);
      this.model.destroy();
      console.log('This.model.destroy().. app.models.todos: '+app.models.todos);
      console.log('this.model.id: '+this.model.id);
      app.models.todos.remove(this.model.id);
      console.log('removed i hope.');
      console.log(app.models.todos);
        console.log('asdfasdf');
        $('.body-container').empty();
        $('.body-container').append('<div class="button">');
        $('.body-container').append('<ul class="todo-list">');
        navigate('');
    },

    edit: function() {
      this.$('.title').addClass('title-editing');
      this.$('.title').removeClass('title');
      this.$('.description').addClass('description-editing');
      this.$('.description').removeClass('description');
      this.$('.hidden-button').addClass('save');
      this.$('.hidden-button').removeClass('hidden-button');
      this.$('.two-buttons').addClass('hidden-button');
      this.$('.edit-title').focus();
    },

    saveEdit: function() {
      var title = this.$('.edit-title').val(),
          description = this.$('.edit-description').val();
      console.log(this.model.toJSON());
      console.log(title);
      if(title) {
        this.model.set({
          id: this.model.id,
          title: title,
          description: description
        });
        this.model.save(null, {
          success: function() {
            this.$('.title-editing').addClass('title');
            this.$('.title').removeClass('title-editing');
            this.$('.description-editing').addClass('description');
            this.$('.description').removeClass('description-editing');
            this.$('.one-button').addClass('hidden-button');
            this.$('.two-buttons').removeClass('hidden-button');
            this.$('.title>p').html(title);
            this.$('.description>p').html(description);
          }
        });


      }
      else {
        alert('Title must not be empty.');
        this.edit();
        return;
      }
    },

    /**
     * To HTML
     *
     * @return {String}
     * @api public
     */

    toHTML: function() {
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

    /**
     * Focus on Description Edit Field
     *
     */
    moveToDes: function(e) {
      console.log('entering..');
      if(e.which == 13 && this.$('.edit-title').val().trim()){
        $('.edit-description').focus();
      }
    }
    // titleUpdate: function(title) {
    //   // console.log(title);
    //   this.set({
    //     title: title
    //   })
    // }
  });

});


