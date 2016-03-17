/**
 * Created by Pravin on 3/8/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .service('commentService', commentService);

    function commentService($http,$q,CONFIG,tokenService) {
        var self = this;
        self.registerComment = registerComment;
        self.getComments = getComments;

        function registerComment(imdbId, comment){
            //Post request @api/comments/{id} with comment json
            console.log(imdbId);
            console.log(comment);
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/api/comments/' + imdbId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                },
                data: comment
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function getComments(imdbId) {
            //Get request @api/comments
            console.log(imdbId);
            var req = {
                method: 'GET',
                url: CONFIG.API_END_POINT + '/api/comments/'+imdbId,
                headers: {
                    'Authorization': 'Bearer ' + tokenService.getToken()
                }
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(errorResponse) {
            console.log(errorResponse.status);
            $q.reject(errorResponse.status);
        }
    }
})();