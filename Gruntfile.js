/**
 * Tree starter kit Gruntfile
 * Copyright 2013-2015 Ilia Kolev
 * Licensed under MIT (https://github.com/iliakolev/tree/blob/master/LICENSE)
 */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            rootPath:  'www/',
            distPath:  'www/dist/',
            sassPath:  'www/sass/',
            jsPath:    'www/js/',
            npmPath:   'node_modules/'
        },

        sass: {
            options: {
                sourcemap: 'none'
            },
            core: {
                src: '<%= meta.sassPath %>main.scss',
                dest: '<%= meta.distPath %>css/main.css'
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'Android 2.3',
                            'Android >= 4',
                            'Chrome >= 20',
                            'Firefox >= 24', // Firefox 24 is the latest ESR
                            'Explorer >= 9',
                            'iOS >= 6',
                            'Opera >= 12',
                            'Safari >= 6'
                        ]
                    })
                ]
            },
            core: {
                src: '<%= sass.core.dest %>'
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: '*', // keep all important comments
                report: 'min'
            },
            tree: {
                src: '<%= meta.distPath %>css/main.css',
                dest: '<%= meta.distPath %>css/main.min.css'
            }
        },

        parker: {
            options: {
                metrics: [
                    'TotalStylesheets',
                    'TotalStylesheetSize',
                    'TotalRules',
                    'TotalSelectors',
                    'TotalIdentifiers',
                    'TotalDeclarations',
                    'SelectorsPerRule',
                    'IdentifiersPerSelector',
                    'SpecificityPerSelector',
                    'TopSelectorSpecificity',
                    'TopSelectorSpecificitySelector',
                    'TotalIdSelectors',
                    'TotalUniqueColours',
                    'TotalImportantKeywords',
                    'TotalMediaQueries'
                ],
                file: '<%= meta.distPath %>css/tree-stats.md',
                usePackage: true
            },
            src: '<%= cssmin.tree.dest %>'
        },

        concat: {
            tree: {
                src: [
                    '<%= meta.npmPath %>jquery/dist/jquery.js',
                    '<%= meta.jsPath %>main.js'
                ],
                dest: '<%= meta.distPath %>js/scripts.js'
            }
        },

        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: false
            },
            tree: {
                src: '<%= concat.tree.dest %>',
                dest: '<%= meta.distPath %>js/scripts.min.js'
            }
        },

        clean: {
            dist: '<%= meta.distPath %>'
        },

        perfbudget: {
            default: {
                options: {
                    url: 'http://www.theguardian.com/uk',
                    key: 'API_KEY_HERE'
                }
            }
        },

        scsslint: {
            options: {
                config: '<%= meta.sassPath %>.scss-lint.yml'
            },
            src: [
                '<%= meta.npmPath %>{,tree*/}*.scss',
                '<%= meta.sassPath %>{,*/}*.scss'
            ]
        },

        csslint: {
            options: {
                csslintrc: '<%= meta.sassPath %>.csslintrc'
            },
            src: '<%= meta.distPath %>/css/main.css'
        },

        jshint: {
            options: {
                jshintrc: '<%= meta.jsPath %>.jshintrc'
            },
            grunt: {
                src: 'Gruntfile.js'
            },
            src: {
                src: '<%= meta.jsPath %>*.js'
            }
        },

        jscs: {
            options: {
                config: '<%= meta.jsPath %>.jscsrc'
            },
            grunt: {
                src: '<%= jshint.grunt.src %>'
            },
            src: {
                src: '<%= jshint.src.src %>'
            }
        },

        connect: {
            site: {
                options: {
                    base: '<%= meta.rootPath %>',
                    hostname: 'localhost',
                    open: true,
                    livereload: true,
                    port: 8000
                }
            }
        },

        watch: {
            options: {
                hostname: 'localhost',
                livereload: true,
                port: 8000
            },
            js: {
                files: '<%= meta.jsPath %>**/*.js',
                tasks: ['dist-js']
            },
            sass: {
                files: '<%= meta.sassPath %>**/*.scss',
                tasks: ['dist-css']
            },
            html: {
                files: '<%= meta.rootPath %>**'
            }
        }
    });

    // Load the plugins.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Default task(s).
    grunt.registerTask('dist-css', ['sass', 'postcss', 'cssmin', 'parker']);
    grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);
    grunt.registerTask('validate-budget', ['perfbudget']);
    grunt.registerTask('build', ['dist']);
    grunt.registerTask('default', ['dist']);
    grunt.registerTask('test', ['dist', 'scsslint', 'csslint', 'jshint', 'jscs']);
    grunt.registerTask('server', ['dist', 'connect', 'watch']);
};
