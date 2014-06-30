
// router

app.Routers = Backbone.Router.extend({
  routers : {
    '*filter' : 'setFilter'
    "/" : "getTodos",
    "/todo/:id" : "getTodo",
    "/create" : "create"
  },

  getTodos: function(){
    //list all todos
  },
  getTodo: function(todoId){
    //details about one todo
  },
  create: function(){
    //creating new todo
  }
})
