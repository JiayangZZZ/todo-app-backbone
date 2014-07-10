

requirejs.config({
  baseUrl : '/scripts/modules',
  paths : {
    jquery : "vendor/jquery/dist/jquery",
    backbone : "vendor/backbone/backbone",
    underscore : "vendor/underscore/underscore",
    superagent : 'vendor/superagent'
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

  'backbone',
  'todo/router'

], function(

  Backbone,
  Router

  ) {

  /**
   * Router Instantiation
   */

  var router = new Router();

  Backbone.history.start({pushState: true, hashChange: false});

  window.cf = {
    origin : 'http://zhangjiayang.dev.p1staff.com:3000'
  };

  //fetching todo list fsrom server

  // var todo = new Todo();
  // var res = todo.fetch({
  //   success: function() {
  //     console.log(todo.toJSON());
  //     console.log(JSON.stringify(todo));
  //   }
  // });

  // test.forEach(function(todo){ console.log(todo.title) });

});


