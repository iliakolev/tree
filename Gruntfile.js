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
     * Displays the elapsed execution time of grunt tasks
     */
    require('time-grunt')(grunt);

    /**
     * JIT plugin loader for Grunt
     * https://github.com/shootaroo/jit-grunt
     * https://github.com/gruntjs/grunt/issues/975#issuecomment-29058707
     */
    require('jit-grunt')(grunt, {
        scsslint: 'grunt-scss-lint'
    });

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
            ],
            css: '<%= project.www %>/assets/css/'
        },

        /**
         * Bowercopy
         * https://npmjs.org/package/grunt-bowercopy
         * Scrupulously manage file locations for bower dependencies.
         */
        bowercopy: {
            options: {
                srcPrefix: 'bower_components',
                clean: true
            },
            jquery: {
                options: {
                    destPrefix: 'www/assets/js/vendor'
                },
                files: {
                    'jquery.min.js': 'jquery/dist/jquery.min.js'
                }
            },
            tree_defaults: {
                options: {
                    destPrefix: 'www/assets/sass/settings'
                },
                files: {
                    '_defaults.scss': 'tree-defaults/_defaults.scss'
                }
            },
            tree_functions: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_functions.scss': 'tree-functions/_functions.scss'
                }
            },
            tree_mixins: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_mixins.scss': 'tree-mixins/_mixins.scss'
                }
            },
            tree_normalizer: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_normalize.scss': 'tree-normalize/_normalize.scss'
                }
            },
            tree_reset: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_reset.scss': 'treeframework-reset/_reset.scss'
                }
            },
            tree_box_sizing: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_box-sizing.scss': 'tree-box-sizing/_box-sizing.scss'
                }
            },
            tree_shared: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_shared.scss': 'tree-shared/_shared.scss'
                }
            },
            tree_clearfix: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_clearfix.scss': 'tree-clearfix/_clearfix.scss'
                }
            }
        },

        /**
         * JSHint
         * https://github.com/gruntjs/grunt-contrib-jshint
         * Manage the options inside .jshintrc file
         */
        jshint: {
            files: [
                'www/assets/js/src/*.js',
                'Gruntfile.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'www/assets/js/scripts.js',
                    'www/assets/js/scripts.min.js',
                    'www/assets/js/vendor/*.js'
                ]
            }
        },

        /**
         * Concatenate JavaScript files
         * https://github.com/gruntjs/grunt-contrib-concat
         * Imports all .js files
         */
        concat: {
            dist: {
                src: '<%= project.js %>',
                dest:'www/assets/js/scripts.js'
            }
        },

        /**
         * Uglify (minify) JavaScript files
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Compresses and minifies all JavaScript files into one
         */
        uglify: {
            dist: {
                files: {
                    'www/assets/js/scripts.min.js': 'www/assets/js/scripts.js'
                }
            }
        },

        /**
         * A Grunt task to lint your SCSS
         * https://github.com/ahmednuaman/grunt-scss-lint
         */
        scsslint: {
            files: [
                '<%= project.www %>/assets/sass/{,*/}*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                reporterOutput: null
            }
        },


        /**
         * Compile Sass to CSS using Compass
         * https://github.com/gruntjs/grunt-contrib-compass
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
                src: '<%= project.css %>screen.css'
            }
        },

        /**
         * CSSO
         * Minify CSS files
         * https://github.com/t32k/grunt-csso
         */
        csso: {
            options: {
                report: 'min'
            },
            dist: {
                files: {
                    '<%= project.css %>screen.min.css': ['<%= project.css %>screen.css']
                }
            }
        },

        /**
         * Browser sync
         * Keep multiple browsers & devices in sync
         * https://github.com/shakyShane/grunt-browser-sync
         */
        browser_sync: {
            dev: {
                files: {
                    src : [
                        '<%= project.css %>screen.min.css',
                        '<%= project.www %>/{,*/}*.{html,php}'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    server: {
                        baseDir: 'www'
                    }
                }
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: '<%= project.js %>',
                tasks: ['concat', 'jshint', 'uglify']
            },
            sass: {
                files: 'www/assets/sass/{,*/}*.{scss,sass}',
                tasks: ['compass', 'autoprefixer', 'csso'],
            },
            pages: {
                files: '<%= project.www %>/{,*/}*.{html,php}',
            },
            images: {
                files: '<%= project.www %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            }
        }
    });

    /**
     * Default task
     * Run 'grunt' on the command line
     */
    grunt.registerTask('default', [
        'compass',
        'autoprefixer',
        'csso',
        'scsslint',
        'jshint',
        'watch'
    ]);

    /**
     * Build task
     * Run 'grunt build' on the command line
     * Then compress all JS/CSS files
     */
    grunt.registerTask('build', [
        'compass',
        'autoprefixer',
        'csso',
        'scsslint',
        'jshint',
        'uglify'
    ]);

    /**
     * Sync task
     * Run 'grunt sync' on the command line
     * Alias sync to browser_sync + watch
     */
    grunt.registerTask('sync', [
        'browser_sync',
        'watch'
    ]);

    /**
     * Bower task
     * Alias bower to bowercopy
     * Run 'grunt bower' on the command line
     *
     * When updating a bower dependency, update the version in bower.json, run
     * 'grunt bower', and then commit the result. When adding a dependency,
     * update the bowercopy task accordingly.
     */
    grunt.registerTask('bower', 'bowercopy');
};
