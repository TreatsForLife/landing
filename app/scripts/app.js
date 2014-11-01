'use strict';

angular
    .module('landingApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeCtrl'
            })
            .when('/welcome', {
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeCtrl'
            })
            .when('/about-us', {
                templateUrl: 'views/about-us.html',
                controller: 'AboutUsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
