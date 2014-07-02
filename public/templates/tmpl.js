define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['body']=function anonymous(it) {
var out='<!--contaienr--><div class="body-container"><ul class="todo-list">';var arr1=it.todos;if(arr1){var todo,index=-1,l1=arr1.length-1;while(index<l1){todo=arr1[index+=1];out+='<li>'+(todo.title)+'</li>';} } out+='</ul></div>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--header--><div class="landing-header-container"><h1 class="title">'+(it.title)+'</h1></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>TODO APP</title><link href="./public/styles/reset.css" rel="stylesheet" type="text/css"><link href="./public/styles/base.css" rel="stylesheet" type="text/css"><link href="./public/styles/layout.css" rel="stylesheet" type="text/css"><script data-main="main" src="scripts/require.js"></script></head><body><section class="header">'+(it.header)+'</section><section class="body">'+(it.body)+'</section></body></html>';return out;
};
return tmpl;});
