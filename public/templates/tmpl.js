define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['createButton']=function anonymous(it) {
var out='';return out;
};
  tmpl['createTemplate']=function anonymous(it) {
var out='<!-- template for creating todo --><div class="form"><div class="create-title"><input name="title" class="input-todo-title" type="text" placeholder="Title here"></input></div><div class="create-description"><textarea name="description" class="input-todo-description" type="text" placeholder="Write some details about this!"></textarea></div><div class="two-buttons"><div class="red-button"><a><p class="red-button-text">BACK</p></a></div><div class="green-button"><a><p class="green-button-text">SAVE</p></a></div></div></div>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--header--><div class="landing-header-container"><h1 class="header">'+(it.title)+'</h1></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE HTML><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui"><meta name="apple-mobile-web-app-capable" content="yes"><title>TODO APP</title><link href="../public/styles/build/styles.css" rel="stylesheet" type="text/css"><link rel="shortcut icon" type="image/x-icon" href="/public/images/icon.ico"><link rel="icon" type="image/x-icon" href="/public/images/icon.ico"></head><body><section class="header">'+(it.header)+'</section><section class="body"><div class="body-container"></div></section><script data-main="/scripts/main" src="/scripts/modules/vendor/requirejs/require.js"></script></body></html>';return out;
};
  tmpl['itemTemplate']=function anonymous(it) {
var out='<li class="todo-list-item" data-id="'+(it.id)+'"><a href="http://zhangjiayang.dev.p1staff.com:3300/todos/'+(it.id)+'"><label>'+(it.title)+'</label></a></li>';return out;
};
  tmpl['todoTemplate']=function anonymous(it) {
var out='<!-- template for single todo --><div class="todo"><div class="title"><p>'+(it.title)+'</p><input class="edit-title" value="'+(it.title)+'"></div><div class="description"><p>'+(it.description)+'</p><textarea class="edit-description">'+(it.description)+'</textarea></div><div class="two-buttons"><div class="red-button"><a><p class="red-button-text">DELETE</p></a></div><div class="green-button"><a href="http://zhangjiayang.dev.p1staff.com:3300"><p class="green-button-text">BACK</p></a></div></div><div class="hidden-button"><div class="one-button"><div class="green-button"><a><p class="green-button-text">SAVE</p></a></div></div></div></div>';return out;
};
  tmpl['todosTemplate']=function anonymous(it) {
var out='<!--contaienr--><div class="todos"><!-- create button --><div class="button"><div class="one-button"><div class="green-button"><a href="http://zhangjiayang.dev.p1staff.com:3300/create"><p class="green-button-text">CREATE</p></a></div></div></div><!-- testing view from main.js --><ul class="todo-list"></ul></div>';return out;
};
return tmpl;});
