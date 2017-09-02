myApp.controller('securityController',  function($scope, Security, Score){
    
    //Set the title of the current training page
    $scope.title = "Security";
    
    //sets the score at the start of the application
    $scope.score = 0;
    
    //get the security questions array from the Security Service
    $scope.securityQuestions = Security.getSecurityQuestions();
   
    //function used in the radio button to save the answer to the selected radio value (eighter true or false based on the current answer correct property)
    $scope.select= function(x){
        $scope.correct = x;
    }//end of select function
    
    //function that support the "done" botton for each qustion by disabling the current question and updating the score if correct. 
    $scope.done = function(index){
        //sets the current question done property to true when user press done
        $scope.securityQuestions[index].done = true;   
        
        //if the answer is true, then add one to the score
        if($scope.correct==="true"){
            
            //Adds one to the current score count
            Score.addScore();
        }// end of if statment for when answer is true
        
        
    }//end of done function
    
    $scope.finish = function(){
        //gets the current count and the length of the array to determine the score.
        $scope.score = Score.getScore($scope.securityQuestions.length);
        
    }// end of finish function
    
});//end of buttonController