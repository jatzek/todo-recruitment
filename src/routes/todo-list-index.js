/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {

        $routeProvider.when('/', {

            controller : 'todoListIndexCtrl',
            controllerAs : 'vm',
            templateUrl : '/templates/todo-list-index.html'
        });
    });