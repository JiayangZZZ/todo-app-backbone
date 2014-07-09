
// router

define([

  'backbone',
  'todo/todoView'

],function(

  Backbone,
  TodoView

) {

  return Backbone.Router.extend({
    routers : {
      '/' : 'getTodos',
      '/todo/:id' : 'getTodo',
      '/create' : 'createTodoOnEnter'
    },

    getTodos: function(){
      console.log("ROUTE: homepage...");
      var todoView = new TodoView();
    }
  });

})
