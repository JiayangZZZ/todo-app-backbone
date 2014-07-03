
//--- model of todo

define([

  'backbone'

], function(

  Backbone

) {

  console.log("Todo todo!");
  var Todo = Backbone.Model.extend({
    defaults: {
      title : 'TITLE!!!',
      description : 'DESCRIPTION'
    }
  });
  var todo1 = new Todo({ title: 'TITLE1', description: 'DESCRIPTION1'});
  var todo2 = new Todo({ title: 'TITLE2', description: 'DESCRIPTION2'});
  var todo3 = new Todo({ title: 'TITLE3', description: 'DESCRIPTION3'});

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
