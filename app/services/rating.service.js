/**
 * Created by Pravin on 3/17/2016.
 */
(function() {
    'use strict';

    angular
        .module('io.egen.proteus')
        .service('ratingService',ratingService);

    function ratingService($http,$q,CONFIG,tokenService) {
        var self = this;
        self.registerUserRating = registerUserRating;
        self.getUserRating = getUserRating;

        function registerUserRating(imdbID,rating) {
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/api/title/rating/' + imdbID,
                headers: {
                    'Authorization': 'Bearer ' + tokenService.getToken(),
                    'Content-Type': 'application/json'
                },
                data : rating
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function getUserRating() {

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