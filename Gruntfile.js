/**
 * Tree Gruntfile
 * Copyright 2013-2014 Ilia Kolev
 * Licensed under MIT (https://github.com/iliakolev/tree/blob/master/LICENSE)
 */

module.exports = function (grunt) {
    'use strict';

    /**
     * Time-grunt
     *
     * Display the elapsed execution time of grunt tasks.
     * https://github.com/sindresorhus/time-grunt
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
         * Store your package file so you can reference its specific data
         * whenever necessary.
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project info.
         */
        tree: {
            root: 'www/',
            css: 'www/css/',
            sass: 'www/sass/',
            js: [
                'www/js/vendor/*.js',
                'www/js/src/*.js'
            ]
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
                    destPrefix: 'www/sass/settings'
                },
                files: {
                    '_defaults.scss': 'tree-defaults/_settings.defaults.scss'
                }
            },

            treeResponsiveSettings: {
                options: {
                    destPrefix: 'www/sass/settings'
                },
                files: {
                    '_responsive.scss': 'tree-responsive-settings/_settings.responsive.scss'
                }
            },

            treeFunctions: {
                options: {
                    destPrefix: 'www/sass/tools'
                },
                files: {
                    '_functions.scss': 'tree-functions/_tools.functions.scss'
                }
            },

            treeMixins: {
                options: {
                    destPrefix: 'www/sass/tools'
                },
                files: {
                    '_mixins.scss': 'tree-mixins/_tools.mixins.scss'
                }
            },

            treeResponsiveTools: {
                options: {
                    destPrefix: 'www/sass/tools'
                },
                files: {
                    '_responsive.scss': 'tree-responsive-tools/_tools.responsive.scss'
                }
            },

            treeAliases: {
                options: {
                    destPrefix: 'www/sass/tools'
                },
                files: {
                    '_aliases.scss': 'tree-aliases/_tools.aliases.scss'
                }
            },

            treeNormalizer: {
                options: {
                    destPrefix: 'www/sass/generic'
                },
                files: {
                    '_normalize.scss': 'tree-normalize/_generic.normalize.scss'
                }
            },

            treeReset: {
                options: {
                    destPrefix: 'www/sass/generic'
                },
                files: {
                    '_reset.scss': 'tree-reset/_generic.reset.scss'
                }
            },

            treeBoxSizing: {
                options: {
                    destPrefix: 'www/sass/generic'
                },
                files: {
                    '_box-sizing.scss': 'tree-box-sizing/_generic.box-sizing.scss'
                }
            },

            treeShared: {
                options: {
                    destPrefix: 'www/sass/generic'
                },
                files: {
                    '_shared.scss': 'tree-shared/_generic.shared.scss'
                }
            },

            treePage: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_page.scss': 'tree-page/_base.page.scss'
                }
            },

            treeHeadings: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_headings.scss': 'treeframework-headings/_base.headings.scss'
                }
            },

            treeParagraphs: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_paragraphs.scss': 'tree-paragraphs/_base.paragraphs.scss'
                }
            },

            treeLinks: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_links.scss': 'tree-links/_base.links.scss'
                }
            },

            treeLists: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_lists.scss': 'tree-lists/_base.lists.scss'
                }
            },

            treeImages: {
                options: {
                    destPrefix: 'www/sass/base'
                },
                files: {
                    '_images.scss': 'tree-images/_base.images.scss'
                }
            },

            treeLayout: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_layout.scss': 'tree-layout/_object.layout.scss'
                }
            },

            treeNav: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_nav.scss': 'tree-nav/_object.nav.scss'
                }
            },

            treeListBare: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_list-bare.scss': 'tree-list-bare/_object.list-bare.scss'
                }
            },

            treeListInline: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_list-inline.scss': 'tree-list-inline/_object.list-inline.scss'
                }
            },

            treeListBlock: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_list-block.scss': 'tree-list-block/_object.list-block.scss'
                }
            },

            treeListUi: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_list-ui.scss': 'tree-list-ui/_object.list-ui.scss'
                }
            },

            treeLinkBlock: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_link-block.scss': 'tree-link-block/_object.link-block.scss'
                }
            },

            treeLinkClean: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_link-clean.scss': 'tree-link-clean/_object.link-clean.scss'
                }
            },

            treeTables: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_tables.scss': 'tree-tables/_object.tables.scss'
                }
            },

            treeMedia: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_media.scss': 'tree-media/_object.media.scss'
                }
            },

            treeBlock: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_block.scss': 'tree-block/_object.block.scss'
                }
            },

            treeFlag: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_flag.scss': 'tree-flag/_object.flag.scss'
                }
            },

            treeBox: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_box.scss': 'tree-box/_object.box.scss'
                }
            },

            treeSprite: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_sprite.scss': 'tree-sprite/_object.sprite.scss'
                }
            },

            treeButtons: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_buttons.scss': 'tree-buttons/_object.buttons.scss'
                }
            },

            treePack: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_pack.scss': 'tree-pack/_object.pack.scss'
                }
            },

            treeTabs: {
                options: {
                    destPrefix: 'www/sass/object'
                },
                files: {
                    '_tabs.scss': 'tree-tabs/_object.tabs.scss'
                }
            },

            treeClearfix: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_clearfix.scss': 'tree-clearfix/_trump.clearfix.scss'
                }
            },

            treeWidths: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_widths.scss': 'tree-widths/_trump.widths.scss'
                }
            },

            treeWidthsResponsive: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_widths-responsive.scss': 'tree-widths-responsive/_trump.widths-responsive.scss'
                }
            },

            treeSpacing: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_spacing.scss': 'tree-spacing/_trump.spacing.scss'
                }
            },

            treeSpacingResponsive: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_spacing-responsive.scss': 'tree-spacing-responsive/_trump.spacing-responsive.scss'
                }
            },

            treeHidden: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_hidden.scss': 'tree-hidden/_trump.hidden.scss'
                }
            },

            treeHiddenResponsive: {
                options: {
                    destPrefix: 'www/sass/trump'
                },
                files: {
                    '_hidden-responsive.scss': 'tree-hidden-responsive/_trump.hidden-responsive.scss'
                }
            },

            jquery: {
                options: {
                    destPrefix: 'www/js/vendor'
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
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'www/js/scripts.js',
                    'www/js/scripts.min.js',
                    'www/js/vendor/*.js'
                ]
            },
            files: [
                'www/js/src/*.js',
                'Gruntfile.js'
            ]
        },

        /**
         * Concat
         *
         * Concatenate JavaScript files.
         * https://github.com/gruntjs/grunt-contrib-concat
         */
        concat: {
            js: {
                src: '<%= tree.js %>',
                dest:'www/js/scripts.js'
            }
        },

        /**
         * Uglify
         *
         * Minify files with UglifyJS.
         * https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            options: {
                preserveComments: 'some'
            },
            core: {
                src: '<%= concat.js.dest %>',
                dest: 'www/js/scripts.min.js'
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
                '<%= tree.sass %>{,*/}*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                exclude: [
                    'www/sass/generic/_normalize.scss',
                    'www/sass/generic/_shared.scss',
                    'www/sass/tools/_mixins.scss'
                ]
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
            core: {
                options: {
                    browsers: [
                        'Android 2.3',
                        'Android >= 4',
                        'Chrome >= 20',
                        'Firefox >= 24',
                        'Explorer >= 8',
                        'iOS >= 6',
                        'Opera >= 12',
                        'Safari >= 6'
                    ],
                    map: {
                        inline: false
                    }
                },
                src: '<%= tree.css %>main.css'
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
                    '<%= tree.css %>main.min.css': ['<%= tree.css %>main.css']
                }
            }
        },

        /**
         * Browser sync
         *
         * Keep multiple browsers and devices in sync.
         * https://github.com/shakyShane/grunt-browser-sync
         */
        browserSync: {
            dev: {
                files: {
                    src : [
                        '<%= tree.css %>main.min.css',
                        '<%= tree.root %>/{,*/}*.{html,php}'
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
         * Runs tasks against changed watched files.
         * https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: '<%= tree.js %>',
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: '<%= tree.sass %>{,*/}*.scss',
                tasks: ['compass', 'autoprefixer', 'csso'],
                options: {
                    spawn: false
                }
            },
            pages: {
                files: '<%= tree.root %>/{,*/}*.{html,php}'
            },
            images: {
                files: '<%= tree.root %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            }
        },

        /**
         * Perfbudget
         *
         * Performance budgeting.
         * https://github.com/tkadlec/grunt-perfbudget
         */
        perfbudget: {
            default: {
                options: {
                    url: 'http://iliakolev.com',
                    key: 'API_KEY_HERE'
                }
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
     * Serve task
     * Run 'grunt serve' on the command line.
     */
    grunt.registerTask('serve', [
        'browserSync',
        'watch'
    ]);

    /**
     * Budget task
     * Run 'grunt budget' on the command line.
     */
    grunt.registerTask('budget', 'perfbudget');

    /**
     * Depend task
     * Run 'grunt depend' on the command line.
     *
     * When updating a bower dependency, update the version in bower.json, run
     * 'grunt depend', and then commit the result. When adding a dependency,
     * update the depend task accordingly.
     */
    grunt.registerTask('depend', 'bowercopy');
};
