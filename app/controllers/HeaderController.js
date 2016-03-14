/**
 * Created by Pravin on 3/12/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('HeaderController',HeaderController);

    function HeaderController(tokenService) {
        var headerVm = this;
        headerVm.isAuthed = isAuthed;
        headerVm.getSubject = getSubject;
        headerVm.logout = logout;

        function isAuthed() {
            return tokenService.isAuthed();
        }

        function getSubject() {
            return tokenService.getSubject();
        }

        function logout() {
            tokenService.logout();
        }
    };
})();