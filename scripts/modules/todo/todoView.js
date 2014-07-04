
define([

  'backbone',
  'underscore'

  ], function(

    Backbone,
    _,

    ){

  console.log("this is the todo View");
  var TodoView = Backbone.View.extend({
    el: '#container2',
    // template: _.template( $("#todo-list-template").html()),
    initialize: function(){
      this.render();
      console.log("todoView initialize....");
    },
    render: function(){
      console.log("rendering....");
      var template= _.template( $("#todo-list-template").html());
      this.$el.html(template;
      return this;
    }
  });
  var todoView = new TodoView();
})


