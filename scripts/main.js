

requirejs.config({
  baseUrl : 'script/modules',
  paths : {
    jquery : "/vender/jquery",
    backbone : "/vender/backbone",
    underscore : "/vender/underscore"
  }
})

require([
  // 'todo/todo.'
], function() {
  // var todo = require("/todo/todo.js");
  console.log('main.js file');

// console.log(todo);
});

// console.log(todo);

