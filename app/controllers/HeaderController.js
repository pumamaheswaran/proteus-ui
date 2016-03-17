/**
 * Created by Pravin on 3/12/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('HeaderController',HeaderController);

    function HeaderController(tokenService,$window) {
        var headerVm = this;
        headerVm.isAuthed = isAuthed;
        headerVm.getSubject = getSubject;
        headerVm.logout = logout;
        headerVm.isAdmin = isAdmin;

        function isAdmin() {

            if('admin' == tokenService.getRole()) {
                return true;
            }
            else {
                return false;
            }
        }

        function isAuthed() {
            return tokenService.isAuthed();
        }

        function getSubject() {
            return tokenService.getSubject();
        }

        function logout() {
            tokenService.logout();
            $window.location.href='/proteus-ui/index.html#/login';
        }
    };
})();