
var express = require('express')
  , http = require('http')
  , requirejs = require('requirejs');

var app = express();
var tmpl = requirejs('./public/templates/tmpl.js');

app.configure(function() {
  app.set('port', process.env.PORT || 3300);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname));
  app.use(express.bodyParser());
});

app.get('/', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header({ title : "TODO"}),
    body : tmpl.body()
  }));
})

app.get('/todos/:id', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header({ title : "TODO"}),
    body : tmpl.todoBody({title: 'title', description: 'description'})
  }));
})

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
