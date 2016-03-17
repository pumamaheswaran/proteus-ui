/**
 * Created by Pravin on 3/14/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('TitleController',TitleController);


    function TitleController(titleService) {
        var titleVm = this;
        titleVm.getTopRatedTitles = getTopRatedTitles;
        titleVm.titles = [];
        init();

        function init() {
            titleService
                .getTopRatedTitles()
                .then(function(data) {
                    titleVm.totalItems = data.length;
                    for (var i=0; i<data.length; i+=4) {
                        titleVm.titles.push(data.slice(i, i+4));
                    }
                    titleVm.currentPage = 1;
                    titleVm.itemsPerPage = 2;
                },function(error) {
                    console.log(error);
                });
        }


        function getTopRatedTitles() {
            return titleService.getTopRatedTitles();
        }
    }
})();