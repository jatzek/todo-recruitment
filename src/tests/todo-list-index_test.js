/**
 * Created by jacek on 20.07.16.
 */

'use strict';

describe('index', function() {

    beforeEach( module('todoApp') );

    describe('index controller', function(){

        it('index controller should be defined', inject( function ( $controller) {


            var indexCtrl = $controller('todoListIndexCtrl');

            expect( indexCtrl).toBeDefined();
        }));

        it('index should exposes todos property and newTodo method', inject(function($controller) {


            var indexCtrl = $controller('todoListIndexCtrl');

            expect( indexCtrl.newTodo ).toBeDefined();
            
            expect( indexCtrl.todos ).toBeDefined();
        }));

        it('call newTodo method should increase todos count', inject(function( $controller, todoRepo ) {

            var indexCtrl = $controller('todoListIndexCtrl');
            var currentTodoCount = todoRepo.todos.length;

            indexCtrl.newTodo();

            expect( todoRepo.todos.length ).toEqual( currentTodoCount + 1 );
        }));

        it('call newTodo method should change location to /:id/edit', inject( function ($controller, $location, todoRepo) {

            var indexCtrl = $controller('todoListIndexCtrl');

            indexCtrl.newTodo();

            var newTodoId = todoRepo.todos[0].id;

            var expectedLocation = '/' + newTodoId + '/edit';

            expect($location.url()).toEqual( expectedLocation );

        }));
    });
});