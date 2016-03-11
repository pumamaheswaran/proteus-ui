/**
 * Created by Pravin on 3/11/2016.
 */
(function(){
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('FooterController',FooterController);

    function FooterController() {
        var footerVm = this;
        footerVm.date = new Date();
    };
})();