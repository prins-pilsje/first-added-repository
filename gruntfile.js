/*global module*/
module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-jslint');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "public/css/style.css": "app/less/style.less"
                }
            }
        },

        connect: {
            server: {
                options: {
                    // bei weglassen, standardmäßig auf port 8000
                    port: 9001,
                    // ist ausgangsordner von index.html
                    base: 'public',
                    livereload: true
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    'public/index.html': ['app/index.html']
                }
            }
        },

        htmlhint: {
            html1: {
                options: {
                    'tag-pair': true
                },
                src: ['public/**/*.html']
            }
        },

        jslint: {
            server: {
                src: ['gruntfile.js']
            }
        },

        // watch task
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['app/less/**/*.less'],
                tasks: ['less']
            },
            processhtml: {
                files: ['app/index.html'],
                tasks: ['processhtml']
            },
            htmlhint: {
                files: ['public/index.html'],
                tasks: ['htmlhint']
            },
            jslint: {
                files: ['gruntfile.js'],
                tasks: ['jslint']
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);

};
