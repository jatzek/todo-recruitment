/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp',[ 'ngRoute' ])
    .config( function ($locationProvider) {

        $locationProvider.html5Mode(true);
    })
    .run( function ( todoRepo ) {
        
        //setup default list
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create().summary = 'Write tests';
        todoRepo.create().summary = 'Apply some style';
        todoRepo.create().summary = 'Use immutable and reactive';
        todoRepo.create().summary = 'Rewrite this to components';

    });
