/*A service that provides an array of security questions and answers to the security html and controller. */
myApp.factory('Security', [ function () {

    var securityQuestions = [{"question":"What department can the Security Director NOT be responsible for?", "fail":false, "options":[{"answer":"Surveillance", "correct":true}, {"answer":"Buffet", "correct":false}, {"answer":"House Keeping", "correct":false}]}, {"question":"Which point of egress do security not have to be posted?", "fail":false, "options":[{"answer":"Front Door Parking Lot Entrance to the Casino", "correct":false}, {"answer":"Buffet Entrance", "correct":true}, {"answer":"Hotel Entrance to the Casino", "correct":false}]}, {"question":"A casino must have the following signage and brochure?", "fail":false, "options":[{"answer":"Caution patrons to have a valid ID at all times", "correct":false}, {"answer":"Caution against patrons leaving children unattended", "correct":true}, {"answer":"Caution patrons to not leave E-Z pay tickets unattended", "correct": false}]}, {"question":"How many security officers must a casino property have?", "fail":false, "options":[{"answer":"Enough to protect assets and investigate illegal activity", "correct":true}, {"answer":"5", "correct":false}, {"answer":"10", "correct":false}]}, {"question":"How many security officers must be First Aid, CPR, and AED cerified?", "fail":false, "options":[{"answer":"Only the supervisors", "correct":false}, {"answer":"At least one officer per shift", "correct":true}, {"answer":"Every officer must be certified", "correct":false}]}, {"question":"How often must the Emergancy Plan be updated and submitted to the MGC?", "fail":false, "options":[{"answer":"Annually", "correct":true}, {"answer":"Quaterly", "correct":false}, {"answer":"Semi-annually", "correct":false}]}, {"question":"Where can the MGC Address be displayed?", "fail":false, "options":[{"answer":"In the security office", "correct":false}, {"answer":"On a card that can be given to the patron upon request", "correct":false}, {"answer":"At the Front Entrance in full view", "correct":true}]}, {"question":"Where can each officer have have their work permit?", "fail":false, "options":[{"answer":"On their person", "correct":true}, {"answer":"In the security office as long as it is easily accessable", "correct":false}, {"answer":"In their locker", "correct":false}]}];
    
    return {
        
        //return the compliance array of objects
        getSecurityQuestions: function(){
            return securityQuestions;
        }
    }/*End of main Return*/
    
    
}]);