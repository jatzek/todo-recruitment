/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp',[ 'ngRoute' ])
    .config( function ($locationProvider) {

        //use history.pushState
        $locationProvider.html5Mode(true);
    });