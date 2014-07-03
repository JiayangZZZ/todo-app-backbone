//collection of todos

define([

  'todo/todo',
  'backbone'

  ], function( Todo, Backbone ){
    var Todos = Backbone.collection.extend({
      model: Todo.Todo
    });
    var todos = new Todos( todo1, todo2, todo3);
  })


//collections are ordered sets of models
//they fetch data from the server, need a 'url'
