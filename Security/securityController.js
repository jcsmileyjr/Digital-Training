myApp.controller('securityController',  function($scope, Security, Score){
    
    //Set the title of the current training page
    $scope.title = "Surveillance Test";
    
    //sets the score at the start of the application
    $scope.score = 0;
    
    //sets a global finish variable used when the finish button is press to show all correct and incorrect answers.
    $scope.showAnswers = false;
    
    //sets the enableButton variable to false to disable Finish button
    $scope.enableButton = false;
    
    //set the showEndOfTest variable link to the ng-show in the center body div to false to show the tests. If set to true, then the tests is hidden and the end of test div is shown. 
    $scope.showEndOfTest = false;
    
    //gets today date to use when user print the score at the end of a test
    $scope.today = new Date();
    
    //get type of test taken to use when user print the score at the end of a test
    $scope.type = "Surveillance Test";
    
    //use to show the "printScore" button once the Finish Button is press
    $scope.finishButtonPress = false;
    
    //function to print the end of the test screen
    $scope.printScreen = function(){
        window.print();
    }
    
    //get the security questions array from the Security Service
    $scope.questions = Security.getSurveillanceQuestions();
    
    $scope.security = function(){
           
        //get the security questions array from the Security Service
        $scope.questions = Security.getSecurityQuestions();
        
        //Set the title of the current training page
        $scope.title = "Security Test";
            
        //reset starting app's parameters
        $scope.showAnswers = false;
        $scope.enableButton = false;
        $scope.score = 0;
        $scope.correct = "";
        $scope.showEndOfTest = false;
        $scope.type = "Security Test";
        $scope.finishButtonPress = false;
        
    }
    
    $scope.surveillance = function(){
        
        //get the surveillance questions array from the surveillance data array in the Security service
        $scope.questions = Security.getSurveillanceQuestions();
        
        //Set the title of the current training page
        $scope.title = "Surveillance Test";
        
        //reset starting app's parameters
        $scope.showAnswers = false;
        $scope.enableButton = false;
        $scope.score = 0;
        $scope.correct = "";
        $scope.showEndOfTest = false;
        $scope.type = "Surveillance Test";
        $scope.finishButtonPress = false;
    }
   
    //function used in the radio button to save the answer to the selected radio value (eighter true or false based on the current answer correct property)
    $scope.select= function(x){
        $scope.correct = x;
    }//end of select function
    
    //function that support the "done" botton for each qustion by disabling the current question and updating the score if correct. 
    $scope.done = function(index){
        
        //if the answer is true, then add one to the score
        if($scope.correct==="true"){
            
            //Change the current question finish attribute to show user got the question correct.
            $scope.questions[index].finish = true;          
            
            //Add one to questionDone taly
            Score.tallyQuestionDone();
        }// end of if statment for when answer is true
        if($scope.correct==="false"){
            
            //Change the current question finish attribute to show user got the question incorrect.
            $scope.questions[index].finish = false; 
            
            //Add one to questionDone taly
            Score.tallyQuestionDone();
        }
        
        //checks to see if all questions have been answered by using the Score enableButton function to count each time a question is anaswer. 
        $scope.enableButton = Score.enableButton($scope.questions.length);
        
    }//end of done function
    
    //function for user to press when finish answering all questions and to show score
    $scope.finish = function(){
        
        //gets the current count and the length of the array to determine the score.
        $scope.score = Score.getScore($scope.questions.length, $scope.questions);
        
        //Show all answers as correct or incorrect
        $scope.showAnswers = true;
        $scope.finishButtonPress = true;
        
    }// end of finish function
    
    //function to restart test
    $scope.restart = function(){
        location.reload();
    }
    
    //switch main body div/screen to the print score div/screen
    $scope.printScore = function(){
        $scope.showEndOfTest = true;
    }
    
});//end of buttonController