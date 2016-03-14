/**
 * Created by Pravin on 3/8/2016.
 */
(function(){

    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('LoginController',LoginController);

    function LoginController(userService, tokenService) {
        var loginVm = this;
        loginVm.login = login;


        function login() {

            userService
                .login(loginVm.newUser)
                .then(function(data) {
                    tokenService.setToken(data['token']);
                    console.log(tokenService.isAuthed());
                })
                .catch(function(error) {
                    console.log(error);
                })
        };
    };
})();