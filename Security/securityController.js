myApp.controller('securityController',  function($scope, Security, Score){
    
    //Set the title of the current training page
    $scope.title = "Security";
    
    //sets the score at the start of the application
    $scope.score = 0;
    
    //sets a global finish variable used when the finish button is press to show all correct and incorrect answers.
    $scope.showAnswers = false;
    
    //sets the enableButton variable to false to disable Finish button
    $scope.enableButton = false;
    
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
            
            //Add one to questionDone taly
            Score.tallyQuestionDone();
        }// end of if statment for when answer is true
        if($scope.correct==="false"){
            //Add one to questionDone taly
            Score.tallyQuestionDone();
        }
        
        //checks to see if all questions have been answered by using the Score enableButton function to count each time a question is anaswer. 
        $scope.enableButton = Score.enableButton($scope.securityQuestions.length);
        
    }//end of done function
    
    //function for user to press when finish answering all questions and to show score
    $scope.finish = function(){
        
        //gets the current count and the length of the array to determine the score.
        $scope.score = Score.getScore($scope.securityQuestions.length);
        
        //Show all answers as correct or incorrect
        $scope.showAnswers = true;
        
    }// end of finish function
    
});//end of buttonController