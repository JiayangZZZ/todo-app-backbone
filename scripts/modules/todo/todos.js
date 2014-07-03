//collection of todos

define([

  'todo/todo',
  'backbone'

  ], function(){
    var Todos = Backbone.collection.extend({
      model: Todo,
    })
    return(new Todos());
  })


//collections are ordered sets of models
//they fetch data from the server, need a 'url'
