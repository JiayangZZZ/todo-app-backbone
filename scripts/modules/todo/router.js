
// router

define([

  'backbone'

],function(

  Backbone

) {

  var Routers = Backbone.Router.extend({
    routers : {
      // '*filter' : 'setFilter'
      "/" : "getTodos",
      "/todo/:id" : "getTodo",
      "/create" : "createTodoOnEnter"
    },

    getTodos: function(){
      console.log("ROUTE: homepage...");
    }
  })
})
