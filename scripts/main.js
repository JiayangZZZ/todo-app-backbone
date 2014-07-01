

var express = require('express')
  , http = require('http')
  , requirejs = require('requirejs');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3300);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
  app.use(express.bodyParser());
});

requirejs.config({
  baseUrl : '__dirname',
  paths : {
    jquery : 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
    underscore : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js',
    backbone : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js'
  }
})

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
