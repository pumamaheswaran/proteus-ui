/**
 * Created by Pravin on 3/11/2016.
 */
(function(){
    angular
        .module('io.egen.proteus')
        .service('tokenService', tokenService);

    function tokenService($window) {
        var self = this;
        self.getToken = getToken;
        self.setToken = setToken;
        self.logout = logout;
        self.isAuthed = isAuthed;
        self.parseJwt = parseJwt;
        function getToken() {
            return $window.localStorage['jwtToken'];
        }

        function setToken(token) {
            $window.localStorage['jwtToken'] = token;
        }

        function logout() {
            $window.localStorage.removeItem('jwtToken');
        }

        function isAuthed() {
            var token = self.getToken();
            if(token) {
                var params = self.parseJwt(token);
                return Math.round(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        }

        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
        }
    }
})();