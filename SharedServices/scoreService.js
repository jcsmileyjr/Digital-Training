/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Score', [ function (Security) {
    
    //object used to count each time a quetion is answered. Used to help un-dis-able the finish button
    var enableFinishButton = {questionsDone: 0};
    
    
    return {
        
        //return the current score when user press the finish button. The parameters are the length of the current questions array and the current questions array
        getScore: function(length, questions){
            var counter = 0;
            //loop through the current question array counting the correctly answer question
            for(var i=0;i<questions.length;i++){
                if(questions[i].finish=== true){
                    counter ++;
                }// end of if statement
            }// end of for loop              
            return (counter/length)*100;
        },
        
        //Add one to the enableFinishButton.questionsDone 
        tallyQuestionDone: function(){
            enableFinishButton.questionsDone ++;           
        }, 
        
        //returns true if count is equal to length of questions array
        enableButton: function(length){
            if(enableFinishButton.questionsDone >= length){          
            return true;
            } else{               
                return false;
            }
                
        }//end of function
    }/*End of main Return*/
    
    
}]);