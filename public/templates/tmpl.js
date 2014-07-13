define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['body']=function anonymous(it) {
var out='<!--contaienr--><div class="body-container"><div class="one-button"><a href="http://zhangjiayang.dev.p1staff.com:3300/create" class="green-button"><p class="green-button-text">CREATE</p></a></div><!-- testing view from main.js --><ul class="real-todo-list"></ul></div>';return out;
};
  tmpl['createTemplate']=function anonymous(it) {
var out='<!-- template for creating todo --><div class="create-title"><input name="title" class="input-todo-title" type="text" placeholder="Title here"></input></div><div class="create-description"><textarea name="description" class="input-todo-description" type="text" placeholder="Write some details about this!"></textarea></div><div class="one-button"><a href="http://zhangjiayang.dev.p1staff.com:3300/create" class="green-button"><p class="green-button-text">SAVE</p></a></div>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--header--><div class="landing-header-container"><h1 class="header">'+(it.title)+'</h1></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>TODO APP</title><link href="../public/styles/build/styles.css" rel="stylesheet" type="text/css"></head><body><section class="header">'+(it.header)+'</section><section class="body">'+(it.body)+'</section><script data-main="/scripts/main" src="/scripts/modules/vendor/requirejs/require.js"></script></body></html>';return out;
};
  tmpl['itemTemplate']=function anonymous(it) {
var out='<a href="http://zhangjiayang.dev.p1staff.com:3300/todos/'+(it.id)+'"><li class="todo-list-item"><label>'+(it.title)+'</label></li></a>';return out;
};
  tmpl['todoTemplate']=function anonymous(it) {
var out='<!-- template for single todo --><div class="title">'+(it.title)+'</div><div class="description">'+(it.description)+'</div><div class="two-buttons"><a class="red-button"><p class="red-button-text">DELETE</p></a><a href="http://zhangjiayang.dev.p1staff.com:3300" class="green-button"><p class="green-button-text">BACK</p></a></div>';return out;
};
return tmpl;});
