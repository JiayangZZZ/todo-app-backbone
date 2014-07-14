
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
      return cf.origin + '/todos/' + this.id + '?userId=' + cf.userId + '&accessToken=' + cf.accessToken;
    },

    sync: function(method, model, options) {
      console.log(model.get('title'));
      console.log(method);
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
          request
            .put(this.url())
            .send({
              title : model.get('title'),
              description : model.get('description')
            })
            .end(function(err, res) {
              if(err) {
                console.log('PUT error!');
              }
              var todo = res.body[0];
              model.set({ title: todo.title, description: todo.description});
              options.success();
            });
        break;
        case 'creat':
          request
            .post(this.url())
            .form({
              title : req.body.title,
              description : req.body.description
            });
        break;
        case 'delete':
          request
            .del(this.url());
        break;
      }

      // Backbone.Model.prototype.sync.apply(this, arguments);
      // Backbone.sync.apply(this, arguments);
    }
  });
});

