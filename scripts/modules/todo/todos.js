//collection of todos

var Todos = Backbone.Collection.extend({
  model : Todo,

})

//collections are ordered sets of models
//they fetch data from the server, need a 'url'
