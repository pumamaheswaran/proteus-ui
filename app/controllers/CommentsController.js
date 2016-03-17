/**
 * Created by Pravin on 3/16/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('CommentsController',CommentsController);

    function CommentsController($routeParams, commentService) {
        var commentsVm = this;
        commentsVm.registerComment = registerComment;
        init();

        function init() {
            commentService.getComments($routeParams.id)
                .then(function(data) {
                    commentsVm.comments = data;
                    commentsVm.imdbID = $routeParams.id;
                },
                function(error) {
                    console.log(error);
                });
        }
        function registerComment() {
            console.log(commentsVm.comment);
            commentService.registerComment(commentsVm.imdbID, commentsVm.comment)
                .then(function(data) {
                    commentsVm.comments.push(data);
                    console.log(data);
                },
                function(error) {
                    console.log(error);
                });
        }
    };
})();