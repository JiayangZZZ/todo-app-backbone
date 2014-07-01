
// router

app.Routers = Backbone.Router.extend({
  routers : {
    // '*filter' : 'setFilter'
    "/" : "getTodos",
    "/todo/:id" : "getTodo",
    "/create" : "createTodoOnEnter"
  },
  'getTodos': function(){
    console.log("ROUTE: homepage...");
  }
})
