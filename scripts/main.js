

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
  'todo/todoView',
  'todo/todos',
  'todo/test',
  'todo/todo'

], function(

  jquery,
  Backbone,
  _,
  todoView,
  Todos,
  test,
  Todo

  ) {

  var AppView = Backbone.View.extend({
    el: '#container',
    template: _.template( $("#todo-list-tmpl").html()),
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return(this);
    }
  });

  var TEST = new Todo({
    title: "titleadfadsfa",
    description: "desdkjflskdjf"
  });

  var appView = new AppView({model: TEST});
  var todoView = new todoView();


  test.forEach(function(todo){ console.log(todo.title) });
  // console.log(test.toJSON());

  var todosFromServer = new Todos();
  todosFromServer.fetch();
  console.log(todosFromServer.fetch());


});


