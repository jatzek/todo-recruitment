/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .controller('todoListIndexCtrl', function( todoRepo, $location ) {

        this.todos = todoRepo.todos;
        
        this.newTodo = function( ) {
            
            var newTodo, editUrl;
            
            newTodo = todoRepo.create();
            editUrl = '/' + newTodo.id + '/edit' 
            
            $location.url( editUrl );
        };
    });