/**
 * Created by Pravin on 3/17/2016.
 */
(function() {
    'use strict';
    angular
        .module('io.egen.proteus')
        .controller('RatingsController',RatingsController);

    function RatingsController($routeParams,ratingService) {
        var ratingsVm = this;
        ratingsVm.submitRating = submitRating;

        function submitRating() {
            ratingService.registerUserRating($routeParams.id, ratingsVm.rating)
                .then(function(data){
                    console.log(data);
                },
                function(error){
                    console.log(error);
                });
        }
    }
})();