/* globals module:true require:true */
module.exports = function(grunt) {


  // project configuration
  var pkg = grunt.file.readJSON('package.json');

  // grunt configuration
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', 'assets/js/*.js']
    },


    // server
    connect: {
      server: {
        options: {
          port: '9001',
         // base: '/root/projects/tree/',
	  keepalive: true,
          hostname: '' // Must be empty to be accessible everywhere and not only "localhost"
        }
      }
    },


    // livereload
    livereload: {
      port: 35728
    },


    // minify javascript
    uglify: {
        my_target: {
          files: {
            'assets/js/all.min.js': ['assets/js/hashgrid.js', 'assets/js/jquery-1.9.1.min.js', 'assets/js/script.js']
          }
        }
      },


    // time to have some styles!
    compass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          noLineComments: false,
          debugInfo: true
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          noLineComments: true,
          config: 'config.rb'
        }
      }
    },


    // optimize images
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [
          {
            expand: true,
            'dist/img.png': 'src/img.png', // 'destination': 'source'
            'dist/img.jpg': 'src/img.jpg'
          }
        ]
      }
    },


    // watch
    watch: {
        options: {
          livereload: true
        },
        css: {
          files: ['assets/css/*.scss'],
          tasks: ['compass']
        }
      }
  });


  // uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // server
  grunt.loadNpmTasks('grunt-contrib-connect');

  // watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // compass
  grunt.loadNpmTasks('grunt-contrib-compass');

  // imgmin
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

};
