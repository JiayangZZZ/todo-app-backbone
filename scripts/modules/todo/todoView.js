
define([

  'backbone',
  'underscore'

  ], function(

    Backbone,
    _

    ){

  //testing model
  var todos = {title: "some title", description: "some des"};

  console.log("this is the todo View");
  var TodoView = Backbone.View.extend({
    el: '#container2',
    template: _.template( $("#todo-list-template").html()),
    initialize: function(){
      this.render();
      console.log("todoView initialize....");
    },
    render: function(){
      console.log("rendering....");
      console.log("todos.title: "+todos.title);
      this.$el.html(this.template(todos));
      return this;
    }
  });

  var TodoView2 = Backbone.View.extend({
    el: '#todo-list',
    tagName: 'li',
    className: '.todo-list-item',
    initialize: function(){
      this.render();
      console.log("Finished rendering TodoView2. ");
    },
    render: function(){
      console.log("rendering TodoView2...");
      this.$el.html("MIGHT BE A LIST ITEM");
      return this;
    }
  });

  var todoView = new TodoView();
  var todoView2 = new TodoView2();
})


