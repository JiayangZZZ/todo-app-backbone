

requirejs.config({
  baseUrl : '__dirname',
  paths : {
    jquery : 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
    underscore : 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js',
    backbone : 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js'
  }
})

var shirt = require('models/shirt.js');
// var shirt = require('shirt');
var todo = require('models/todo.js');
console.log(todo);
console.log(shirt);
