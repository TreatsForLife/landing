'use strict';

angular.module('landingApp')
    .controller('WelcomeCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$location', function ($scope, $rootScope, $timeout, $interval, $location) {

        console.log('WelcomeCtrl');

        $rootScope.bodyClass = 'welcome';
        $rootScope.bodyBg = 'welcome';
        $rootScope.curRoute = 'welcome';

        window.debug = $scope;
    }]);
