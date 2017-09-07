// script.js

    // create the module and name it scotchApp
    var app = angular.module('app', ['ngRoute']);

     // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the page1
            .when('/', {
                templateUrl : 'components/Page1/page1.html',
                controller  : 'controller1'
            })

            // route for the page2
            .when('/page2', {
                templateUrl : 'components/Page2/page2.html',
                controller  : 'controller2'
            })

            // route for the page3
            .when('/page3', {
                templateUrl : 'components/Page3/page3.html',
                controller  : 'controller3'
            })
            
            // route for the page4
            .when('/page4', {
                templateUrl : 'components/Page4/page4.html',
                controller  : 'controller4'
            });
    });

//    // create the controller and inject Angular's $scope
//    app.controller('controller1', function($scope) {
//        // create a message to display in our view
//        $scope.message = 'Hi!!I am Page 1';
//        
//    });
//
//   /* app.controller('controller2', function($scope) {
//        $scope.message = 'Look! I am Page 2';
//    });
//
//    app.controller('controller3', function($scope) {
//        $scope.message = 'Hey! I am page 3.';
//    });
//   
//    app.controller('controller4', function($scope) {
//        $scope.message = 'Hey! I am page 4.';
//    });*/