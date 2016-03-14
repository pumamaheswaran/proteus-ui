/**
 * Created by Pravin on 3/12/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/login',{
                templateUrl: 'app/views/titledetail.tmpl.html'
            })
            .when('/home',{
                templateUrl: 'views/topmovies.tmpl.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
})();