
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
      console.log(this.model.id);
      model.on({
        'change:title' : this.titleUpdate,
        'change:description' : this.descriptionUpdate
      });
    },

    events: {
      'click .red-button' : 'delete',
      'dblclick .title' : 'edit',
      'dblclick .description' : 'edit',
      'click .save>.one-button>.green-button' : 'save',
      'keypress .title-editing' : 'moveToDes'
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
      console.log('edit');
      this.$('.title').addClass('title-editing');
      this.$('.title').removeClass('title');
      this.$('.description').addClass('description-editing');
      this.$('.description').removeClass('description');
      this.$('.hidden-button').addClass('save');
      this.$('.hidden-button').removeClass('hidden-button');
      this.$('.two-buttons').addClass('hidden-button');
      this.$('.edit-title').focus();
    },

    save: function() {
      var title = this.$('.edit-title').val(),
          description = this.$('.edit-description').val();
      console.log(this.$('.edit-title').val());
      if(title) {
        this.model.set({
          id: this.model.id,
          title: title,
          description: description
        });
        this.model.save();

        this.$('.title-editing').addClass('title');
        this.$('.title').removeClass('title-editing');
        this.$('.description-editing').addClass('description');
        this.$('.description').removeClass('description-editing');
        this.$('.one-button').addClass('hidden-button');
        this.$('.two-buttons').removeClass('hidden-button');
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


