
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

  return(Todo);
})

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
