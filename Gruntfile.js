/**
 * TreeFramework Gruntfile
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
            treeDefaults: {
                options: {
                    destPrefix: 'www/assets/sass/settings'
                },
                files: {
                    '_defaults.scss': 'tree-defaults/_defaults.scss'
                }
            },
            treeFunctions: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_functions.scss': 'tree-functions/_functions.scss'
                }
            },
            treeAliases: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_aliases.scss': 'tree-aliases/_aliases.scss'
                }
            },
            treeMixins: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_mixins.scss': 'tree-mixins/_mixins.scss'
                }
            },
            treeNormalizer: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_normalize.scss': 'tree-normalize/_normalize.scss'
                }
            },
            treeReset: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_reset.scss': 'tree-reset/_reset.scss'
                }
            },
            treeBoxSizing: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_box-sizing.scss': 'tree-box-sizing/_box-sizing.scss'
                }
            },
            treeShared: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_shared.scss': 'tree-shared/_shared.scss'
                }
            },
            treeClearfix: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_clearfix.scss': 'tree-clearfix/_clearfix.scss'
                }
            },
            treePage: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_page.scss': 'tree-page/_page.scss'
                }
            },
            treeParagraphs: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_paragraphs.scss': 'tree-paragraphs/_paragraphs.scss'
                }
            },
            treeHeadings: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_headings.scss': 'treeframework-headings/_headings.scss'
                }
            },
            treeLists: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_lists.scss': 'tree-lists/_lists.scss'
                }
            },
            treeImages: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_images.scss': 'tree-images/_images.scss'
                }
            },
            treeLayout: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_layout.scss': 'tree-layout/_layout.scss'
                }
            },
            treeNav: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_nav.scss': 'tree-nav/_nav.scss'
                }
            },
            treeBareList: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_bare-list.scss': 'tree-bare-list/_bare-list.scss'
                }
            },
            treeBlockList: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_block-list.scss': 'tree-block-list/_block-list.scss'
                }
            },
            treeUiList: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_ui-list.scss': 'tree-ui-list/_ui-list.scss'
                }
            },
            treeTables: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_tables.scss': 'tree-tables/_tables.scss'
                }
            },
            treeMedia: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_media.scss': 'tree-media/_media.scss'
                }
            },
            treeFlag: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_flag.scss': 'tree-flag/_flag.scss'
                }
            },
            treeBox: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_box.scss': 'tree-box/_box.scss'
                }
            },
            treeButtons: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_buttons.scss': 'tree-buttons/_buttons.scss'
                }
            },
            treeTabs: {
                options: {
                    destPrefix: 'www/assets/sass/objects'
                },
                files: {
                    '_tabs.scss': 'tree-tabs/_tabs.scss'
                }
            },
            treeWidths: {
                options: {
                    destPrefix: 'www/assets/sass/trumps'
                },
                files: {
                    '_widths.scss': 'tree-widths/_widths.scss'
                }
            },
            treeSpacing: {
                options: {
                    destPrefix: 'www/assets/sass/trumps'
                },
                files: {
                    '_spacing.scss': 'tree-spacing/_spacing.scss'
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
                        'last 3 version',
                        'ie 8',
                        'ie 9'
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
                restructure: false,
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
        browserSync: {
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
                tasks: ['concat', 'jshint', 'uglify'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: 'www/assets/sass/{,*/}*.{scss,sass}',
                tasks: ['compass', 'autoprefixer', 'csso'],
                options: {
                    spawn: false
                }
            },
            pages: {
                files: '<%= project.www %>/{,*/}*.{html,php}'
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
     * Alias sync to browserSync + watch
     */
    grunt.registerTask('sync', [
        'browserSync',
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
