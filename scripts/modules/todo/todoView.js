
define([

  'backbone',
  'underscore',
  'todo/test'

  ], function(

    Backbone,
    _,
    testTodos

    ){

  //test model
  var todos = {title: "some title", description: "some des"};

  console.log("this is the todo View");
  var TodoView = Backbone.View.extend({
    el: '#todo-list',
    tagNmae: 'li',
    template: _.template( $("#todo-list-template").html()),

    initialize: function(){
      this.render();
      console.log("todoView initialized.");
    },
    render: function(){
      console.log("rendering....");
      console.log("todos.title: "+ todos.title);
      this.$el.html(this.template(todos));
      return this;
    }
  });

  return(TodoView);
})


