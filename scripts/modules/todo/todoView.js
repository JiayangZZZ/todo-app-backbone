
define([

  'backbone',
  'dot',
  'todo/test',
  'todo/todo',
  'tmpl'

  ], function(

    Backbone,
    doT,
    testTodos,
    Todo,
    tmpl

    ){

  //test model
  var todos = {title: "some title", description: "some des"};

  console.log("this is the todo View");
  var TodoView = Backbone.View.extend({
    el: '.real-todo-list',
    tagName: 'li',    //doesn't work!
    // template: tmpl.itemTemplate(),

    initialize: function(){
      this.render();
      console.log("todoView initialized.");
    },
    render: function(){
      console.log(tmpl);
      // console.log("rendering....");

      // console.log("todos.title: "+ this.model.title);
      // this.$el.html(this.template(this.model));
      this.$el.html(tmpl.itemTemplate( { title:  'adsf' } ));
      return this;
    }
  });
  var todoview = new TodoView({model: todos});

  return(TodoView);

})


