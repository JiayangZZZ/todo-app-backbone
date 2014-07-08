

requirejs.config({
  baseUrl : 'scripts/modules',
  paths : {
    jquery : "vendor/jquery",
    backbone : "vendor/backbone",
    underscore : "vendor/underscore",
    dot : "vendor/doT"
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  map: {
    '*': {
      tmpl : '/public/templates/tmpl.js'
    }
  }
});

require([

  'jquery',
  'backbone',
  'dot',
  'todo/todoView',
  'todo/todos',
  'todo/todo',
  'todo/todosView',
  'todo/router'

], function(

  jquery,
  Backbone,
  TodoView,
  Todos,
  Todo,
  TodosView,
  Router

  ) {

  //fetching todo list from server
  var todos = new Todos();
  // var res = todos.fetch({
  //   success: function() {
  //     console.log(todos.toJSON());
  //   }
  // });


  //intance of TodoView -- view for a single todo
  // var todoView = new TodoView();

  //intance of TodosView -- view for the whole todo list

  // test.forEach(function(todo){ console.log(todo.title) });

});


