/**
 * Created by jacek on 20.07.16.
 */

module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        watch: {

            options: {
                spawn : true
            }
        },
        browserSync : {
            dev: {
                bsFiles : {
                    src :[
                        './src/css/*.css',
                        './src/index.html',
                        './src/**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    port : 3000,
                    ui: {
                        port: 3003
                    },
                    server: {
                        baseDir: "./src",
                        routes: {
                            "/bower_components": "bower_components"
                        }
                    }
                }
            }
        },
        ngtemplates:  {
            build: {
                cwd: 'src',
                src:      ['templates/*.html'],
                dest:     '.tmp/templates.js',
                options : {
                    module : 'todoApp'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            build: {
                src: [
                    'src/app.js',
                    'src/controllers/*.js',
                    'src/routes/*.js',
                    'src/services/*.js',
                    '.tmp/templates.js'
                ],
                dest : 'dist/todo-app.js'
            },
            vendors: {
                src : [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js'
                ],
                dest: 'dist/vendors.min.js'
            }
        },
        copy: {
            build : {
                files: [
                    { expand: true, cwd : 'src', src: 'index.html', dest: 'dist' },
                    { expand: true, cwd : 'src', src: 'demo.js', dest: 'dist' },
                    { expand: true, cwd : 'src', src: 'demo.js', dest: 'dist' },
                    { expand: true, cwd : 'src', src: 'css/*', dest: 'dist' }
                ]
            }
        },
        uglify: {
            options : {
                mangle : false,
                report : 'gzip'
            },
            build :{

                files : {
                    'dist/todo-app.min.js' : 'dist/todo-app.js'
                }
            }
        },
        clean: {

            build: ['./.tmp']
        },
        usemin: {
            html : 'dist/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-usemin');


    grunt.registerTask('build', ['ngtemplates:build','concat:build','concat:vendors','clean:build','copy:build','uglify:build','usemin']);
    grunt.registerTask('workee',['browserSync','watch']);
};