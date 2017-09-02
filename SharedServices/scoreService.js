/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Score', [ function (Security) {

    var score = {count:0};
    
    return {
        
        //add one to score.count when user gets correct answer
        addScore: function(){
            score.count++;
        },
        
        //return the current score
        getScore: function(length){
            return (score.count/length)*100;
        }
    }/*End of main Return*/
    
    
}]);