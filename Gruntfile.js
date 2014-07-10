module.exports = function(grunt) {

  grunt.initConfig({
    compass : { // Target options
      dev : {
        options: {
          sassDir : 'public/styles',
          cssDir : 'public/styles/build',
          noLineComments : true,
          debugInfo : true
        }
      }
    },

    watch : {
      styles : { // Target options
        files : [
          '**/*.scss' //glob file pattern
        ],

        tasks : ['compass']
      },

      templates : {
        files : [
          '**/*.dot'
        ],

        tasks : ['dot']
      },

      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    },

    dot : {
      dist: {
        options: {
          variable : 'tmpl',
          root : __dirname + '/scripts/modules',
          requirejs : true,
          node : true
        },
        src : [
          '**/*.dot'
        ],
        dest : './public/templates/tmpl.js'
      }
    },

    jshint: {
      all: ['scripts/modules/documents/*.js'
            , 'scripts/modules/todo/*.js'
            , 'scripts/main.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-dot-compiler');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};
