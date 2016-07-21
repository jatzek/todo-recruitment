/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp',[ 'ngRoute' ])
    .config( function ($locationProvider) {

        //use history.pushState
        $locationProvider.html5Mode(true);
    });;/**
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
    });;/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .controller('todoItemViewCtrl', function( todoRepo, $routeParams ) {

        this.todo = todoRepo.findById( $routeParams.id );
    });;/**
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
    });;/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {

        $routeProvider.when('/:id/edit', {

            controller : 'todoItemEditCtrl',
            controllerAs : 'vm',
            templateUrl : 'templates/todo-item-edit.html'
        });
    });;/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {
        
        $routeProvider.when('/:id/view', {
            
            controller : 'todoItemViewCtrl',
            controllerAs : 'vm',
            templateUrl : 'templates/todo-item-view.html'
        });
    });;/**
 * Created by jacek on 20.07.16.
 */

angular
    .module('todoApp')
    .config(function( $routeProvider )  {

        $routeProvider.when('/', {

            controller : 'todoListIndexCtrl',
            controllerAs : 'vm',
            templateUrl : 'templates/todo-list-index.html'
        });
    });;/**
 * Created by jacek on 20.07.16.
 */

//prevent global scope
(function ( angular) {

    /**
     *
     * @param id
     * @param summary
     * @param complete
     * @constructor
     */
    function Todo( id, summary, complete ) {

        this.id = id;
        this.summary = summary;
        this.complete = complete || false;
    }

    /**
     *
     * @constructor
     */
    function TodoRepository( ) {

        this.sequence = 1;

        this.todos = [];
    }

    TodoRepository.prototype = {

        /**
         * Create new instance of and add it to repo
         * @returns {Todo}
         */
        create : function( ) {

            var todo, tmpSummary;

            tmpSummary = 'Todo#' + this.sequence;
            todo = new Todo(  this.sequence, tmpSummary );
            this.sequence++;
            this.todos.unshift( todo );

            return todo;
        },

        /**
         *
         * @param id
         * @returns {Todo}
         */
        findById : function ( id ) {

            var i;

            for (i in this.todos) {
                if ( this.todos.hasOwnProperty(i) && this.todos[ i ].id == id)

                    return this.todos[ i ];
            }
        },

        /**
         *
         * @param todo
         */
        remove : function ( todo ) {

            this.todos.splice( this.todos.indexOf( todo ), 1 );
        }
    }

    angular.module('todoApp').service('todoRepo', TodoRepository );

})( angular )
;angular.module('todoApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/todo-item-edit.html',
    "<div>\n" +
    "    <h2 class=\"view-title\">Edit #{{ vm.todo.id }}</h2>\n" +
    "    <form>\n" +
    "        <div>\n" +
    "            <label for=\"todo-summary\">Summary</label>\n" +
    "            <input type=\"text\" ng-model=\"vm.todo.summary\" id=\"todo-summary\" />\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label for=\"todo-complete\">Completed</label>\n" +
    "            <input type=\"checkbox\" ng-model=\"vm.todo.complete\" id=\"todo-complete\" />\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"actions\">\n" +
    "        <a href=\"/\">Back to list</a>\n" +
    "        <button ng-click=\"vm.remove()\">Remove this todo</button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('templates/todo-item-view.html',
    "<div>\n" +
    "    <h2 class=\"view-title\">View #{{ vm.todo.id }}</h2>\n" +
    "    <h3 ng-class=\"{ complete: vm.todo.complete }\">{{ vm.todo.summary }}</h3>\n" +
    "    <div class=\"actions\">\n" +
    "        <a href=\"/\">Back to list</a>\n" +
    "        <a ng-href=\"/{{ vm.todo.id }}/edit\">Edit</a>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('templates/todo-list-index.html',
    "<div>\n" +
    "    <h2 class=\"view-title\">Index</h2>\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"todo in vm.todos | limitTo : 10 \">\n" +
    "            <span ng-class=\"{ complete: todo.complete }\">{{ todo.summary }}</span>\n" +
    "            <a ng-href=\"/{{ todo.id }}/view\">view</a>\n" +
    "            <a ng-href=\"/{{ todo.id }}/edit\">edit</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"actions\">\n" +
    "        <button ng-click=\"vm.newTodo()\">New Todo</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
