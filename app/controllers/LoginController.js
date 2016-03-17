/**
 * Created by Pravin on 3/8/2016.
 */
(function(){

    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('LoginController',LoginController);

    function LoginController(userService, tokenService, $rootScope, $window) {

        var loginVm = this;
        loginVm.login = login;

        loginVm.showLoginError = false;

        function login() {
            userService
                .login(loginVm.newUser,
                    function (response) {

                        //console.log(response.data);
                        tokenService.setToken(response.data['token']);
                        //console.log(tokenService.isAuthed());

                        loginVm.showLoginError = false;
                        $window.location.href='/proteus-ui/index.html#/home';
                    },
                    function errorFun(error) {

                        loginVm.showLoginError = true;
                        console.log(error);
                    });
        };
    };
})();