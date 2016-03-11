/**
 * Created by Pravin on 3/8/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .service('userService',userService);

    function userService($http, $q, CONFIG){
        var self = this;

        self.login = login;
        self.signUp = signUp;

        function login(user){
            console.log(user);
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/users/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
            }
            return $http(req)
                .then(successFn, errorFn);
        }

        function signUp(user){
            console.log(user);
            var req = {
                method: 'POST',
                url: CONFIG.API_END_POINT + '/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
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