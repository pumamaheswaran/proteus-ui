/**
 * Created by Pravin on 3/8/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .service('titleService',titleService);

    function titleService($http,$q,CONFIG,tokenService) {
        var self = this;
        self.getTitleDetails = getTitleDetails;
        self.addTitle = addTitle;
        self.editTitle = editTitle;
        self.deleteTitle = deleteTitle;
        self.rateTitle = rateTitle;
        self.getTopRatedTitles = getTopRatedTitles;
        self.getCatalog = getCatalog;

        function getTitleDetails(imdbId) {
            //Get request @api/title/{id}
            console.log(imdbId);
            var req = {
                method: 'GET',
                url: CONFIG.API_END_POINT + '/api/title/' + imdbId,
                headers: {
                    'Authorization': 'Bearer ' + tokenService.getToken()
                }
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function addTitle(title) {
            //Post request @api/title with title json
            console.log(title);
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/api/title',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                },
                data: title
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function editTitle(imdbId, title) {
            //Put request @api/title/{id} with title json
            console.log(imdbId);
            console.log(title);
            var req = {
                method: 'PUT',
                url: CONFIG.API_END_POINT + '/api/title/' + imdbId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tokenService.getToken()
                },
                data: title
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function deleteTitle(imdbId) {
            //Delete request @api/title/{id}
            console.log(imdbId);
            var req = {
                method: 'DELETE',
                url: CONFIG.API_END_POINT + '/api/title/' + imdbId,
                headers: {
                    'Authorization': 'Bearer ' + tokenService.getToken()
                }
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function rateTitle(imdbId, rating) {
            //Post request @api/title/rating/{id} with rating json
            console.log(imdbId);
            console.log(rating);
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/api/title/rating/' + imdbId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': 'Bearer ' + tokenService.getToken()
                },
                data: rating
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function getTopRatedTitles() {
            //Get Method @ api/title
            //console.log(user);
            console.log(tokenService.getToken());
            var req = {
                method: 'GET',
                url: CONFIG.API_END_POINT + '/api/title',
                headers: {
                    'Authorization': 'Bearer ' + tokenService.getToken()
                }
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function getCatalog() {
            //Get Method @ api/title/all
            //console.log(user);
            console.log(tokenService.getToken());
            var req = {
                method: 'GET',
                url: CONFIG.API_END_POINT + '/api/title/all',
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
            return $q.reject(errorResponse.status);
        }
    }
})();