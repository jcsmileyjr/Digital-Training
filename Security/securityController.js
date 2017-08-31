myApp.controller('securityController',  function($scope, Security){
    
    //Set the title of the current training page
    $scope.title = "Security";
    
    //get the security questions array from the Security Service
    $scope.securityQuestions = Security.getSecurityQuestions();
    
    /*
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    */
});//end of buttonController