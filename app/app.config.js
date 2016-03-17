/**
 * Created by Pravin on 3/12/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .config(moduleConfig)
        .config(['$httpProvider', function($httpProvider) {
            delete $httpProvider.defaults.headers.common["X-Requested-With"]
        }]);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/login',{
                templateUrl: 'app/views/signup.tmpl.html'
            })
            .when('/home',{
                templateUrl: 'app/views/topmovies.tmpl.html'
            })
            .when('/title/:id',{
                templateUrl:'app/views/titledetail.tmpl.html'
            })
            .when('/title/admin/edit', {
                templateUrl:'app/views/editTitle.tmpl.html'
            })
            .when('/browse',{
                templateUrl:'app/views/allmovies.tmpl.html'
            })
            .when('/title/admin/add',{
                templateUrl:'app/views/addtitle.tmpl.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
})();