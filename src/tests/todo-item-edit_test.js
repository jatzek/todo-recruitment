/**
 * Created by jacek on 20.07.16.
 */

'use strict';

describe('edit', function() {

    beforeEach( module('todoApp') );

    //fill empty repo with one todo
    beforeEach( inject( function ( todoRepo ) {

        todoRepo.create();
    }));

    describe('edit controller', function(){

        it('editor controller should be defined', inject(function($controller) {


            var indexCtrl = $controller('todoItemEditCtrl');

            expect( indexCtrl).toBeDefined();
        }));

        it('editor should exposes todo property and remove method', inject(function($controller) {


            var indexCtrl = $controller('todoItemEditCtrl', { $routeParams : { id : 1 }});

            expect( indexCtrl.remove ).toBeDefined();

            expect( indexCtrl.todo ).toBeDefined();
        }));

        it('call remove method should decrease todos count', inject(function($controller, todoRepo ) {

            var indexCtrl = $controller('todoItemEditCtrl', { $routeParams : { id : 1 }});

            var currentTodoCount = todoRepo.todos.length;

            indexCtrl.remove();

            expect( todoRepo.todos.length ).toEqual( currentTodoCount - 1 );

        }));

        it('call remove method should change location to index', inject( function ( $controller, $location) {

            var indexCtrl = $controller('todoItemEditCtrl', { $routeParams : { id : 1 }});

            indexCtrl.remove();

            expect( $location.url() ).toEqual('/');
        }));
    });
});