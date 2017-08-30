/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Security', [ function () {


    
    return {
        
        //return the compliance array of objects
        getSecurityQuestions: function(){
            return securityQuestions;
        }
    }/*End of main Return*/
    
    
}]);