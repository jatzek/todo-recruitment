/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {

        $routeProvider.when('/:id/edit', {

            controller : 'todoItemEditCtrl',
            controllerAs : 'vm',
            templateUrl : '/templates/todo-item-edit.html'
        });
    });