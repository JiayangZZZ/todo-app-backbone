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
      'url': '/todo/'
      // url: 'http://zhangjiayang.dev.p1staff.com:3000/todos?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4'
    });

    // var a = new Todo({ title: 'Go to Jamaica.', id: 3})
    //   , b = new Todo({ title: 'Go to China.'})
    //   , c = new Todo({ title: 'Go to Disneyland.'});

    // var todos = new Todos([a,b]);
    // console.log("Collection size: "+ todos.length);

    // todos.add(c);
    // console.log("Collection size: "+ todos.length);

    // todos.remove(c);
    // console.log("Collection size: "+ todos.length);

    return(Todo);
   })


//collections are ordered sets of models
//they fetch data from the server, need a 'url'
