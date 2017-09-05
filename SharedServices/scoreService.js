/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Score', [ function (Security) {
    
    //oject used to count each time a answer is correct. Used to help determine score
    var score = {count:0};
    
    //object used to count each time a quetion is answered. Used to help un-dis-able the finish button
    var enableFinishButton = {questionsDone: 0};
    
    
    return {
        
        //add one to score.count when user gets correct answer
        addScore: function(){
            score.count++;
        },
        
        //return the current score
        getScore: function(length){
            return (score.count/length)*100;
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