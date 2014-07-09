
//--- model of todo

define([

  'backbone'

], function(

  Backbone

) {

  return Backbone.Model.extend({
    defaults: {
      title : 'TITLE!!!',
      description : 'DESCRIPTION'
    },

    url: function() {
      return 'http://zhangjiayang.dev.p1staff.com:3000/todos' + this.id + '?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4';
      // return 'http://zhangjiayang.dev.p1staff.com:3000/todos/23?userId=1&accessToken=d331dac991d3c59d17b8794040b910b80e3baaa4';
    }
  });
});

//Todo is a convention class
//todo is an instance variable

//models' properties are dynamic
