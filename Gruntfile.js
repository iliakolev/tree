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
     * Jit-grunt
     *
     * Plugin loader for Grunt.
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
         * Store your Package file so you can reference its specific data
         * whenever necessary.
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project info.
         */
        project: {
            www: 'www',
            js: [
                '<%= project.www %>/assets/js/vendor/*.js',
                '<%= project.www %>/assets/js/src/*.js'
            ],
            sass: '<%= project.www %>/assets/sass/',
            css: '<%= project.www %>/assets/css/'
        },

        /**
         * Bowercopy
         *
         * Scrupulously manage file locations for bower dependencies.
         * https://npmjs.org/package/grunt-bowercopy
         */
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },

            treeDefaults: {
                options: {
                    destPrefix: 'www/assets/sass/settings'
                },
                files: {
                    '_defaults.scss': 'tree-defaults/_settings.defaults.scss'
                }
            },

            treeResponsiveSettings: {
                options: {
                    destPrefix: 'www/assets/sass/settings'
                },
                files: {
                    '_responsive.scss': 'tree-responsive-settings/_settings.responsive.scss'
                }
            },

            treeFunctions: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_functions.scss': 'tree-functions/_tools.functions.scss'
                }
            },

            treeMixins: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_mixins.scss': 'tree-mixins/_tools.mixins.scss'
                }
            },

            treeResponsiveTools: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_responsive.scss': 'tree-responsive-tools/_tools.responsive.scss'
                }
            },

            treeAliases: {
                options: {
                    destPrefix: 'www/assets/sass/tools'
                },
                files: {
                    '_aliases.scss': 'tree-aliases/_tools.aliases.scss'
                }
            },

            treeNormalizer: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_normalize.scss': 'tree-normalize/_generic.normalize.scss'
                }
            },

            treeReset: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_reset.scss': 'tree-reset/_generic.reset.scss'
                }
            },

            treeBoxSizing: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_box-sizing.scss': 'tree-box-sizing/_generic.box-sizing.scss'
                }
            },

            treeShared: {
                options: {
                    destPrefix: 'www/assets/sass/generic'
                },
                files: {
                    '_shared.scss': 'tree-shared/_generic.shared.scss'
                }
            },

            treePage: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_page.scss': 'tree-page/_base.page.scss'
                }
            },

            treeHeadings: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_headings.scss': 'treeframework-headings/_base.headings.scss'
                }
            },

            treeParagraphs: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_paragraphs.scss': 'tree-paragraphs/_base.paragraphs.scss'
                }
            },

            treeLinks: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_links.scss': 'tree-links/_base.links.scss'
                }
            },

            treeLists: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_lists.scss': 'tree-lists/_base.lists.scss'
                }
            },

            treeImages: {
                options: {
                    destPrefix: 'www/assets/sass/base'
                },
                files: {
                    '_images.scss': 'tree-images/_base.images.scss'
                }
            },

            treeLayout: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_layout.scss': 'tree-layout/_object.layout.scss'
                }
            },

            treeNav: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_nav.scss': 'tree-nav/_object.nav.scss'
                }
            },

            treeListBare: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_list-bare.scss': 'tree-list-bare/_object.list-bare.scss'
                }
            },

            treeListInline: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_list-inline.scss': 'tree-list-inline/_object.list-inline.scss'
                }
            },

            treeListBlock: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_list-block.scss': 'tree-list-block/_object.list-block.scss'
                }
            },

            treeListUi: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_list-ui.scss': 'tree-list-ui/_object.list-ui.scss'
                }
            },

            treeLinkBlock: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_link-block.scss': 'tree-link-block/_object.link-block.scss'
                }
            },

            treeLinkClean: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_link-clean.scss': 'tree-link-clean/_object.link-clean.scss'
                }
            },

            treeTables: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_tables.scss': 'tree-tables/_object.tables.scss'
                }
            },

            treeMedia: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_media.scss': 'tree-media/_object.media.scss'
                }
            },

            treeBlock: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_block.scss': 'tree-block/_object.block.scss'
                }
            },

            treeFlag: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_flag.scss': 'tree-flag/_object.flag.scss'
                }
            },

            treeBox: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_box.scss': 'tree-box/_object.box.scss'
                }
            },

            treeSprite: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_sprite.scss': 'tree-sprite/_object.sprite.scss'
                }
            },

            treeButtons: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_buttons.scss': 'tree-buttons/_object.buttons.scss'
                }
            },

            treePack: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_pack.scss': 'tree-pack/_object.pack.scss'
                }
            },

            treeTabs: {
                options: {
                    destPrefix: 'www/assets/sass/object'
                },
                files: {
                    '_tabs.scss': 'tree-tabs/_object.tabs.scss'
                }
            },

            treeClearfix: {
                options: {
                    destPrefix: 'www/assets/sass/trump'
                },
                files: {
                    '_clearfix.scss': 'tree-clearfix/_trump.clearfix.scss'
                }
            },

            treeWidths: {
                options: {
                    destPrefix: 'www/assets/sass/trump'
                },
                files: {
                    '_widths.scss': 'tree-widths/_trump.widths.scss'
                }
            },

            treeWidthsResponsive: {
                options: {
                    destPrefix: 'www/assets/sass/trump'
                },
                files: {
                    '_widths-responsive.scss': 'tree-widths-responsive/_trump.widths-responsive.scss'
                }
            },

            treeSpacing: {
                options: {
                    destPrefix: 'www/assets/sass/trump'
                },
                files: {
                    '_spacing.scss': 'tree-spacing/_trump.spacing.scss'
                }
            },

            treeSpacingResponsive: {
                options: {
                    destPrefix: 'www/assets/sass/trump'
                },
                files: {
                    '_spacing-responsive.scss': 'tree-spacing-responsive/_trump.spacing-responsive.scss'
                }
            },

            jquery: {
                options: {
                    destPrefix: 'www/assets/js/vendor'
                },
                files: {
                    'jquery.min.js': 'jquery/dist/jquery.min.js'
                }
            }
        },

        /**
         * JSHint
         *
         * Detect errors and potential problems in your JavaScript code.
         * https://github.com/gruntjs/grunt-contrib-jshint
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
         * Concat
         *
         * Concatenate JavaScript files.
         * https://github.com/gruntjs/grunt-contrib-concat
         */
        concat: {
            dist: {
                src: '<%= project.js %>',
                dest:'www/assets/js/scripts.js'
            }
        },

        /**
         * Uglify
         *
         * Minify files with UglifyJS.
         * https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            javascript: {
                files: {
                    'www/assets/js/scripts.min.js': 'www/assets/js/scripts.js'
                }
            }
        },

        /**
         * Scss-lint
         *
         * Lint your .scss files.
         * https://github.com/ahmednuaman/grunt-scss-lint
         */
        scsslint: {
            files: [
                '<%= project.sass %>{,*/}*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                reporterOutput: null
            }
        },


        /**
         * Compass
         *
         * Compile Sass to CSS using Compass.
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
         *
         * Adds vendor prefixes automatically.
         * https://github.com/nDmitry/grunt-autoprefixer
         */
        autoprefixer: {
            dist: {
                options: {
                    browsers: [
                        'last 3 version',
                        'ie 8',
                        'ie 9'
                    ],
                },
                src: '<%= project.css %>main.css'
            }
        },

        /**
         * CSSO
         *
         * Minify CSS files.
         * https://github.com/t32k/grunt-csso
         */
        csso: {
            options: {
                restructure: false,
                report: 'min'
            },
            dist: {
                files: {
                    '<%= project.css %>main.min.css': ['<%= project.css %>main.css']
                }
            }
        },

        /**
         * Browser sync
         *
         * Keep multiple browsers & devices in sync.
         * https://github.com/shakyShane/grunt-browser-sync
         */
        browserSync: {
            dev: {
                files: {
                    src : [
                        '<%= project.css %>main.min.css',
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
         * Watch
         *
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: '<%= project.js %>',
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: '<%= project.sass %>{,*/}*.scss',
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
     * Run 'grunt' on the command line.
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
     * Run 'grunt build' on the command line.
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
