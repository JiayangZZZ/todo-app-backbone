
//renders individual todo items list (li)

app.TodoView = Backbone.View.extend({
  tagName: 'li',  // new render elements will be wrapped around <li></li>
  template: _.template($('#item-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this; //enable chained calls?
  }
})

module.exports = TodoView();
