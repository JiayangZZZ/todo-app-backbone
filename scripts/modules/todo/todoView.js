
define([

  'backbone',
  'underscore'

  ], function(

    Backbone,
    _

    ){

  console.log("this is the todo View");
  var TodoView = Backbone.View.extend({
    el: '#todo-list',
    initialize: function(){
      this.render();
      console.log("todoView initialize....");
    },
    render: function(){
      console.log("rendering....");
      var template = _.template( $("#todo-list").html(), {})
      this.$el.html( template );
    }
  });
  var todoView = new TodoView();
})


