/**
 * Created by Pravin on 3/17/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('AddTitleController',AddTitleController);

    function AddTitleController(titleService) {
        var addTitleVm = this;
        addTitleVm.addTitle = addTitle;
        addTitleVm.showSuccess = false;

        function addTitle() {
            titleService.addTitle(addTitleVm.title)
                .then(function(data){
                    addTitleVm.showSuccess = true;
                    console.log(data);
                },
                function(error){
                    console.log(error);
                });
        };
    }
})();