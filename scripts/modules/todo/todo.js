
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
    },
    url: 'http://zhangjiayang.dev.p1staff.com:3000/todos?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4'
  });

  return(Todo);
})

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
