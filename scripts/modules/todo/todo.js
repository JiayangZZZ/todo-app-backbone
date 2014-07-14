
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
              console.log(res.body[0]);
              model.set({ title: todo.title, description: todo.description});
              options.success();
            });
        break;
        case 'update':
          request
            .put(this.url()+'&title='+model.get('title')+'&description='+model.get('description'))
            .send({
              title : model.get('title'),
              description : model.get('description')
            })
            .end(function(err, res) {
              if(err)
                console.log('PUT error!');
              options.success();
            });
        break;
        case 'create':
          request
            .post(cf.origin + '/create' + '?userId=' + cf.userId + '&accessToken=' + cf.accessToken+'&title='+model.get('title')+'&description='+model.get('description'))
            .end(function(err, res) {
              if(err)
                console.log('POST error!');
              model.set({
                id: res.body.id,
                title: res.body.title,
                description: res.body.description
              });
              options.success();
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

