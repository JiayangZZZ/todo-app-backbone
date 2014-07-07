
define([

  'backbone'

  ],
  function(

    Backbone

    ){

    var TodosView = Backbone.View.extend({
      tagName: 'ul',
      events: {
        'keypress': 'add'
      },
      add: function(){

      }
    })

  })
