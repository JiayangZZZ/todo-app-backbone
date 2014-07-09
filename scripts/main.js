

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
  'todo/todos',
  'todo/todo',
  'todo/todosView',
  'todo/todoView',
  'todo/router'

], function(

  jquery,
  Backbone,
  Todos,
  Todo,
  TodosView,
  TodoView,
  Router

  ) {

  //fetching todo list from server

  // var todo = new Todo();
  // var res = todo.fetch({
  //   success: function() {
  //     console.log(todo.toJSON());
  //     console.log(JSON.stringify(todo));
  //   }
  // });

  //intance of TodosView -- view for the whole todo list
  // var todosView = new TodosView();
  var todoView = new TodoView();

  // test.forEach(function(todo){ console.log(todo.title) });

});


