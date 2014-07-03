
//--- model of todo

define([

  'backbone'

], function(

  Backbone

) {
  var Todo = Backbone.Model.extend({
    defaults: {
      title : 'TITLE!!!',
      description : 'DESCRIPTION',
      status : 0
    }
  });
  return(new Todo());
})

// define(function() {
//   var Todo = function() {
//     this.title = 'TITLE',
//     this.description = 'DESCRIPTION'
//   };
//   return(new Todo());
// });

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
