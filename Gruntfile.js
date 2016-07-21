/**
 * Created by jacek on 20.07.16.
 */

module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        watch: {
            // styles : {
            //     files : ['./src/scss/**/*.scss'],
            //     tasks : ['sass:dev']
            // },
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    grunt.registerTask('workee',['browserSync','watch']);
};