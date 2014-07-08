define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['body']=function anonymous(it) {
var out='<!--contaienr--><div class="body-container"><div class="create"><input class="new-todo" placeholder="What needs to be done?"></div><!-- testing view from main.js --><ul class="real-todo-list">loading...</ul><!-- hard coded todo list --><ul class="todo-list">';var arr1=it.todos;if(arr1){var todo,index=-1,l1=arr1.length-1;while(index<l1){todo=arr1[index+=1];out+='<li class="todo-list-item">'+(todo.title)+'</li>';} } out+='</ul></div>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--header--><div class="landing-header-container"><h1 class="title">'+(it.title)+'</h1></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>TODO APPpppppp backbone serving</title><link href="./public/styles/build/styles.css" rel="stylesheet" type="text/css"></head><body><section class="header">'+(it.header)+'</section><section class="body">'+(it.body)+'</section>'+(it.template)+'<script data-main="scripts/main" src="scripts/modules/vendor/require.js"></script></body></html>';return out;
};
  tmpl['itemTemplate']=function anonymous(it) {
var out='<div class="todo-list-item"><label>'+(it)+'</label></div>';return out;
};
return tmpl;});
