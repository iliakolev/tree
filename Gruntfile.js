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
    grunt.registerTask('dist', ['clean', 'dist-css']);
    grunt.registerTask('validate-budget', ['perfbudget']);
    grunt.registerTask('build', ['dist']);
    grunt.registerTask('default', ['dist']);
    grunt.registerTask('test', ['dist', 'scsslint', 'csslint']);
    grunt.registerTask('server', ['dist', 'connect', 'watch']);
};
