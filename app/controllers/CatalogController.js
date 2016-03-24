/**
 * Created by Pravin on 3/21/2016.
 */
/**
 * Created by Pravin on 3/14/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('CatalogController',CatalogController);


    function CatalogController(titleService) {
        var catalogVm = this;
        catalogVm.titles = [];
        catalogVm.getCatalog = getCatalog;
        init();

        function init() {
            titleService
                .getCatalog()
                .then(function(data) {
                    catalogVm.totalItems = data.length;
                    for (var i=0; i<data.length; i+=4) {
                        catalogVm.titles.push(data.slice(i, i+4));
                    }
                    catalogVm.currentPage = 1;
                    catalogVm.itemsPerPage = 2;
                },function(error) {
                    console.log(error);
                });
        }

        function getCatalog() {
            return titleService.getCatalog();
        }
    }
})();