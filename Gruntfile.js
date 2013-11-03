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
         * Set project info
         */
        project: {
            www: 'www',
            js: [
                '<%= project.www %>/assets/js/vendor/*.js',
                '<%= project.www %>/assets/js/src/*.js'
            ]
        },

        /**
         * JSHint
         * https://github.com/gruntjs/grunt-contrib-jshint
         * Manage the options inside .jshintrc file
         */
        jshint: {
            files: [
                'www/assets/js/vendor/*.js',
                'www/assets/js/src/*js',
                'Gruntfile.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'www/assets/js/scripts.min.js',
                    'www/assets/js/vendor/*.js'
                ]
            }
        },

        /**
         * Uglify (minify) JavaScript files
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Compresses and minifies all JavaScript files into one
         */
        uglify: {
            dev: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'all',
                    beautify: true
                },
                files: {
                    'www/assets/js/scripts.min.js': '<%= project.js %>'
                }
            },
            dist: {
                options: {
                    mangle: true,
                    compress: true
                },
                files: {
                    'www/assets/js/scripts.min.js': '<%= project.js %>'
                }
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
                    'www/assets/css/screen.css': ['www/assets/css/screen.css']
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
                src: 'www/assets/css/screen.css'
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            js: {
                files: '<%= jshint.files %>',
                tasks: ['jshint', 'uglify:dev']
            },
            sass: {
                files: 'www/assets/sass/{,*/}*.{scss,sass}',
                tasks: ['compass:dist', 'autoprefixer:dist', 'csso:dist'],
            },
        },
    });

    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', [
        'compass:dist',
        'autoprefixer:dist',
        'csso:dist',
        'jshint',
        'uglify:dev',
        'watch'
    ]);

    /**
     * Build task
     * Run `grunt build` on the command line
     * Then compress all JS/CSS files
     */
    grunt.registerTask('build', [
        'compass:dist',
        'autoprefixer:dist',
        'csso:dist',
        'jshint',
        'uglify:dist'
    ]);
};
