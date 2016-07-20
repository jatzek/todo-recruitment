/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .controller('todoItemViewCtrl', function( todoRepo, $routeParams ) {

        this.todo = todoRepo.findById( $routeParams.id );
    });