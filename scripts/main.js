

requirejs.config({
  baseUrl : '/scripts/modules',
  paths : {
    jquery : "vendor/jquery/jquery",
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
  'todo/router',
  'todo/todos'

], function(

  Backbone,
  Router,
  Todos

  ) {

  /**
   * Global Config
   */

  window.cf = {
    origin : 'http://zhangjiayang.dev.p1staff.com:3000',
    userId : '1',
    accessToken : 'd331dac991d3c59d17b8794040b910b80e3baaa4'
  };

  window.app = {
    models: {}
  };
  app.models.todos = new Todos();

  /**
   * IE detector
   */

  var ie = (function(){
    console.log('detecting IE..');
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );
    if (Function('/*@cc_on return document.documentMode===10@*/')()){
        v = 10;
    }
    console.log(v);
    return v > 4 ? v : undef;
  }());

  /**
   * Router Instantiation
   */

  var router = new Router();
  window.navigate = function(url) {
    return Backbone.Router.prototype.navigate(url, {trigger: true});
  };

  Backbone.history.start({pushState: true, hashChange: false});

});


