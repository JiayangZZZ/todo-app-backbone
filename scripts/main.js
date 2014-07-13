

requirejs.config({
  baseUrl : '/scripts/modules',
  paths : {
    jquery : "vendor/jquery/dist/jquery",
    backbone : "vendor/backbone/backbone",
    underscore : "vendor/underscore/underscore",
    superagent : 'vendor/superagent'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  map: {
    '*': {
      tmpl : '/public/templates/tmpl.js'
    }
  }
});

require([

  'backbone',
  'todo/router'

], function(

  Backbone,
  Router

  ) {

  /**
   * Global Config
   */

  window.cf = {
    origin : 'http://zhangjiayang.dev.p1staff.com:3000',
    userId : '1',
    accessToken : 'd331dac991d3c59d17b8794040b910b80e3baaa4'
  };

  /**
   * Router Instantiation
   */

  var router = new Router();

  Backbone.history.start({pushState: true, hashChange: false});

});


