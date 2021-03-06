
    
    /* Unit Test Code */
describe("Security Service:", function() {
    var Security, securityQuestions;
    
    //setup the angular app before each unit test
    beforeEach(module('DT'));
    
    // setup the IssueCounter service before each unit test
    beforeEach(inject(function(_Security_) {
        Security = _Security_;
        securityQuestions = Security.getSecurityQuestions();
    }));
    
    describe("getSecurityQuestions()", function(){    
        it('retrieve an array', function(){
            expect(securityQuestions).toEqual(jasmine.any(Object));
        });    
    });    
    describe("securityQuestons Array", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
           
        }); 
        
        it('retrieve an question', function(){
            expect(securityQuestions[0].question).toEqual('What department can the Security Director NOT be responsible for?');
        });
        
        it('retrieve a array of three answers', function(){
            expect(securityQuestions[0].options.length).toEqual(3);
        });
        
        it('retrieve a Boolean value from the correct property of an answer object', function(){
            expect(securityQuestions[0].options[0].correct).toMatch(/true|false/);
        });
        
        it('retrieve a Boolean value from the fail property of the questoin object ', function(){
            expect(securityQuestions[0].finish).toMatch(/true|false/);            
        });
            
        it('retrieve a Boolean value from the done property of the questoin object ', function(){
            expect(securityQuestions[0].done).toMatch(/true|false/);            
        });             
    });
});/*End of Slot Machine service Describe block*/