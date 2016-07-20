/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .controller('todoItemEditCtrl', function( todoRepo, $routeParams, $location )
    {
        
        this.todo = todoRepo.findById( $routeParams.id );

        this.remove = function( ) {

            todoRepo.remove( this.todo );
            $location.url('/');
        };
    });