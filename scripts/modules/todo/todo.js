
//--- model of todo

define([

  'backbone',
  'superagent'

], function(

  Backbone,
  request

) {

  return Backbone.Model.extend({
    defaults: {
      title : 'TITLE!!!',
      description : 'DESCRIPTION'
    },

    url: function() {
      return cf.origin + '/todos/' + this.id + '?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4';
    },

    sync: function(method, model, options) {
      switch (method) {
        case 'read':
          request
            .get(this.url())
            .end(function(err, res) {
              if (err) {
                console.log('GET error!');
                return;
              }
              var todo = res.body[0];
              model.set({ title: todo.title, description: todo.description});
              options.success();
            });
        break;
        case 'update':
        break;
        case 'creat':
        break;
        case 'delete':
          request
            .del(this.url());
        break;
      }
    }
  });
});

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
