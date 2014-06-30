
//--- model of todo

app.Todo = Backbone.Model.extend({
  defaults: {
    title : '',
    description : '',
    status : 0
  }
});

module.exports = new Todo();

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
