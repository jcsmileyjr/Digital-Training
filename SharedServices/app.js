//Sets the variable myApp as a Angular applicatation named 'DT'. The module ui-router is injected as a dependency to provide url routing. 
var myApp = angular.module('DT', ['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {
    /*
    //If no route or link is select, the app redirects to the nav page */
    $urlRouterProvider.otherwise('/security');

    $stateProvider
        //The security state redirects the user to the security.html template and securityController via the /security url. 
    
        .state('security', {
            url:'/security',
            templateUrl: 'Security/security.html',
            controller: "securityController"
        })
       
    
}]);
