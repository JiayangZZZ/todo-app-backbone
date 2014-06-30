
// renders the full todo list by calling TodoView for each one

var AppView = Backbone.View.extend({
  el: '#container',
  initialize: function(){
    this.input = this.$('#new-todo'); // what's this?
    app.todoList.on('add', this.addOne, this);
    app.todoList.on('reset', this.addAll, this);
    app.todoList.fetch();
  },
  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },
  createTodoOnEnter: function(e){
    if(e.which !== 13 || !this.input.val().trim()) { // ENTER_KEY  = 13
      return;
    }// if input is empty, or didn't press enter button, then do nothing
    app.todoList.create(this.newAttributes()); //what's new Attribute and create
    this.input.val(''); // clean input box
  },
  addOne: function(todo){
    var View = require('./modles/todo');
    var view = new View({model:todo});
    $('#todo-list').append(view.render().el);
  },
  addAll: function(){
    this.$('#todo-list').html(''); // clean the list
    app.todoList.each(this.addOne, this);
  },
  newAttributes: function(){
    return {
      title: this.input.val().trim(),
      completed: false
    }
  }
});

module.exports = new AppView();
