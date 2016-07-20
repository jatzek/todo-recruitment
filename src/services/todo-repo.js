/**
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
