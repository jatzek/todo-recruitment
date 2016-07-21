/**
 * Created by jacek on 20.07.16.
 */
'use strict';

describe('view', function() {

    beforeEach( module('todoApp') );
    
    //fill empty repo with one todo
    beforeEach( inject( function ( todoRepo ) {

        todoRepo.create();
    }));

    describe('viewer controller', function(){


        it('viewer controller should be defined', inject(function($controller) {


            var indexCtrl = $controller('todoItemViewCtrl');

            expect( indexCtrl).toBeDefined();
        }));

        it('viewer should exposes todo property', inject(function($controller) {


            var indexCtrl = $controller('todoItemViewCtrl', { $routeParams : { id : 1 }});

            expect( indexCtrl.todo ).toBeDefined();
        }));
    });
});