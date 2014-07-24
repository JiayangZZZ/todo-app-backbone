
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

    initialize: function(model) {
      this.model = model;
      // model.on({
      //   'change:title' : this.titleUpdate,
      //   'change:description' : this.descriptionUpdate
      // });
    },

    events: {
      'click .red-button' : 'delete',
      'click .green-button' : 'navigateBack',
      'click .title' : 'edit',
      'click .description' : 'edit',
      'click .save>.one-button>.green-button' : 'saveEdit',
      'keypress .title-editing' : 'moveToDes'
    },

    'delete': function() {
      this.model.destroy({
        success: function() {
          app.models.todos.remove(this.model);
          console.log(app.models.todos.toJSON());
          $('.body-container').empty();
          $('.body-container').append('<div class="button">');
          $('.body-container').append('<ul class="todo-list">');
          navigate('');
        }
      });
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
      var _this = this;
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
            // this.$('.title-editing').addClass('title');
            // this.$('.title').removeClass('title-editing');
            // this.$('.description-editing').addClass('description');
            // this.$('.description').removeClass('description-editing');
            // this.$('.one-button').addClass('hidden-button');
            // this.$('.two-buttons').removeClass('hidden-button');
            // this.$('.title>p').html(title);
            // this.$('.description>p').html(description);
            $('.body-container').empty();
            navigate('todos/' + _this.model.get('id'));
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
    },
    // titleUpdate: function(title) {
    //   // console.log(title);
    //   this.set({
    //     title: title
    //   })
    // }
    navigateBack: function() {
      navigate('');
    }
  });

});


