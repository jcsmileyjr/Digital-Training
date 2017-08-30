
    
    /* Unit Test Code */
describe("Security Service:", function() {
    var Security, securityQuestions;
    
    //setup the angular app before each unit test
    beforeEach(module('DT'));
    
    // setup the IssueCounter service before each unit test
    beforeEach(inject(function(_Security_) {
        Security = _Security_;
    }));
    
    describe("getSecurityQuestions()", function(){    
        it('retrieve an array', function(){
        });    
    });    
    describe("securityQuestons Array", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
           
        }); 
        
        it('retrieve an question', function(){
            
        });
        
        it('retrieve a array of three answers', function(){
            
        });
        
        it('retrieve a Boolean value from the correct property of an answer object', function(){
           
        });
        
        it('retrieve a Boolean value from teh fail property of the questoin object ', function(){
            
        });        
    });
});/*End of Slot Machine service Describe block*/