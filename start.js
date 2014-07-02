
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

requirejs('scripts/main.js');

app.get('/', function(req, res) {
  res.send(tmpl.html({
    header : tmpl.header({ title : "TODO"}),
    body : tmpl.body({ todos: [{
      title: "one",
      description: "oneone"
    },{
      title: "two",
      description: "twotwo"
    },{
      title: "three",
      description: "threethree"
    }]})
  }));
})


http.createServer(app).listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
});
