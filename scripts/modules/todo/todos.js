//collection of todos

app.Todos = Backbone.Collection.extend({
  model : app.Todo,

})

//collections are ordered sets of models
//they fetch data from the server, need a 'url'
