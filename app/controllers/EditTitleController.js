/**
 * Created by Pravin on 3/16/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('EditTitleController',EditTitleController);

    function EditTitleController($routeParams, titleService) {
        var etVm = this;
        etVm.editTitle = editTitle;
        etVm.getTitleDetails = getTitleDetails;
        etVm.errorFl = false;
        etVm.showFl = false;
        etVm.showSuccess = false;
        etVm.deleteTitle = deleteTitle;

        function init() {
            titleService.getTitleDetails($routeParams.id)
                .then(function(data) {
                    etVm.title = data;
                },
                function(error) {
                    console.log(error);
                });
        }

        function editTitle() {
            titleService.editTitle(etVm.title.imdbID, etVm.title)
                .then(function(data){
                    etVm.title = data;
                    etVm.showSuccess = true;
                },
                function(error){
                    console.log(error);
                });
        }

        function getTitleDetails() {
            titleService.getTitleDetails(etVm.searchText)
                .then(function(data) {
                    if(data){
                        etVm.title = data;
                        etVm.errorFl = false;
                        etVm.showFl = true;
                    }
                    else {
                        etVm.showFl = false;
                        etVm.errorFl = true;
                        console.log(data);
                    }

                },
                function(error){
                    etVm.errorFl = true;
                    console.log(error);
                });
        }

        function deleteTitle() {
            titleService.deleteTitle(etVm.title.imdbID)
                .then(function(data) {
                   console.log(data);
                    etVm.showSuccess = true;
                }, function(error){
                    console.log(error);
                });
        }
    }
})();