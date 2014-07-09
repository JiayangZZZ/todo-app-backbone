//collection of todos

define([

  'todo/todo',
  'backbone'

  ], function(

    Todo,
    Backbone

    ){
    var Todos = Backbone.Collection.extend({
      model: Todo,
      url: 'http://zhangjiayang.dev.p1staff.com:3000/todos?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4'
    });

    return(Todos);
   })


//collections are ordered sets of models
//they fetch data from the server, need a 'url'
