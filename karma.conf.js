/**
 * Created by jacek on 21.07.16.
 */

module.exports = function(config) {

    config.set({

        basePath: './src',

        files: [
            '../bower_components/angular/angular.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            './app.js',
            '**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};