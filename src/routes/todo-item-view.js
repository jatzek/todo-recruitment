/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {
        
        $routeProvider.when('/:id/view', {
            
            controller : 'todoItemViewCtrl',
            controllerAs : 'vm',
            templateUrl : '/templates/todo-item-view.html'
        });
    });