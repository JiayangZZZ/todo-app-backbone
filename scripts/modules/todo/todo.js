
//--- model of todo

// define([
//   'jquery',
//   'underscore',
//   'backbone'
// ], function() {
//   app.Todo = Backbone.Model.extend({
//     defaults: {
//       title : '',
//       description : '',
//       status : 0
//     }
//   });
//   return(new Todo());
// })

define(function() {
  var Todo = function() {
    this.title = 'TITLE',
    this.description = 'DESCRIPTION'
  };
  return(new Todo());
});

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
