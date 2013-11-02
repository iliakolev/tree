/*!
* Tree Gruntfile
* @author Ilia Kolev
*/

'use strict';

/**
* Grunt module
*/
module.exports = function (grunt) {

    /**
     * Dynamically load npm tasks
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
     * Displays the elapsed execution time of grunt tasks
     */
    require('time-grunt')(grunt);

    /**
     * Project configuration
     */
    grunt.initConfig({

        /**
         * Store your Package file so you can reference its specific data whenever necessary
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * JSHint
         * https://github.com/gruntjs/grunt-contrib-jshint
         * Manage the options inside .jshintrc file
         */
        jshint: {
            files: [
                'assets/js/*.js',
                'Gruntfile.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /**
        * CSSO
        * Minify CSS files
        * https://github.com/t32k/grunt-csso
        */
        csso: {
            dist: {
                files: {
                    'assets/css/screen.css': ['assets/css/screen.css']
                }
            }
        },

        /**
         * Compile Sass to CSS using Compass
         * https://github.com/gruntjs/grunt-contrib-jshint
         */
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        /**
         * Autoprefixer
         * Adds vendor prefixes automatically
         * https://github.com/nDmitry/grunt-autoprefixer
         */
        autoprefixer: {
            dist: {
                options: {
                    browsers: [
                        'last 2 version',
                        'safari 6',
                        'ie 9',
                        'opera 12.1',
                        'ios 6',
                        'android 4'
                    ]
                },
                src: 'assets/css/screen.css'
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            jshint: {
                files: '<%= jshint.files %>',
                tasks: 'jshint'
            },
            sass: {
                files: 'assets/sass/{,*/}*.{scss,sass}',
                tasks: ['compass:dist', 'autoprefixer:dist', 'csso:dist'],
            },
        },
    });

    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', [
        'autoprefixer:dist',
        'jshint',
        'csso:dist',
        'compass:dist',
        'watch'
    ]);
};
