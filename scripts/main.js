

requirejs.config({
  baseUrl : 'scripts/modules',
  paths : {
    jquery : "vendor/jquery",
    backbone : "vendor/backbone",
    underscore : "vendor/underscore"
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require([

  'jquery',
  'backbone',
  'underscore',
  'todo/todo'

], function() {
  var todo = require("todo/todo");
  console.log('Wof wof!');
  // console.log(todo);

  var AppView = Backbone.View.extend({
    el: '#container',
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html("hello world");
    }
  });

  var appView = new AppView();

  console.log('Bones bones!');

});


