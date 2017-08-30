/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Security', [ function () {

    var securityQuestions = [{"question":"first question", "fail":false, "options":[{"answer":"first answer", "correct":true}, {"answer":"second answer", "correct":true}, {"answer":"third answer", "correct":true}]}];
    
    return {
        
        //return the compliance array of objects
        getSecurityQuestions: function(){
            return securityQuestions;
        }
    }/*End of main Return*/
    
    
}]);