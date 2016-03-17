/**
 * Created by Pravin on 3/8/2016.
 */
(function(){
    angular
        .module('io.egen.proteus')
        .controller('SignUpController',SignUpController);

    function SignUpController(userService) {
        signUpVm = this;
        signUpVm.signUp = signUp;
        signUpVm.signUpSuccess = false;

        function signUp() {
            console.log('Called!!!');
            console.log(signUpVm.newUser);
            userService
                .signUp(signUpVm.newUser)
                .then(function(data) {
                    console.log(data);
                    signUpVm.signUpSuccess = true;
                })
                .catch(function(error) {
                    console.log(error);
                })
        };
    }
})();
