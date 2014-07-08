
define([

  'backbone',
  'todo/todos',
  'todo/todoView'

  ],
  function(

    Backbone,
    Todos,
    TodoView

    ){
    var todos = new Todos();
    var TodosView = Backbone.View.extend({

      // // tagName: 'ul',
      // el: '#container',
      // initialize: function() {
      //   this.input = this.$('#new-todo');
      //   todos.on('add', this.addOne, this);
      //   todos.fetch();
      // },
      // events: {
      //   'keypress #new-todo': 'createTodoOnEnter'
      // },
      // createTodoOnEnter: function(e) {
      //   if (e.which !== 13 || !this.input.val().trim()){
      //     return;
      //   }
      //   todos.create(this.newAttributes());
      //   this.input.val(''); //clear the input box
      // }
      // addOne: function(todo) {
      //   var view = new TodoView({model: todo});
      //   $('#todo-list').append(view.render().el);
      // }

    });

    return(TodosView);

  })
