/**
 * Created by jacek on 21.07.16.
 */

//override todoApp for add sample data
angular
    .module('demoApp',['todoApp'])
    .run( function ( todoRepo ) {

        var testsTodo;

        //setup default list
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();
        todoRepo.create();

        testsTodo = todoRepo.create()
        testsTodo.summary = 'Write tests';
        testsTodo.complete = true;

        todoRepo.create().summary = 'Apply some style';
        todoRepo.create().summary = 'Use immutable and reactive';
        todoRepo.create().summary = 'Rewrite this to components';
    });