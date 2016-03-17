/**
 * Created by Pravin on 3/15/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('TitleDetailController',TitleDetailController);


    function TitleDetailController($routeParams, titleService) {
        var tdVm = this;

        init();

        function init() {
            console.log($routeParams)
           titleService.getTitleDetails($routeParams.id)
               .then(function(data) {
                   tdVm.title = data;
               },function(error) {
                   console.log(error);
               });
        }
    }

})();