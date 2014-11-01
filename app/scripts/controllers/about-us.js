'use strict';

angular.module('landingApp')
  .controller('AboutUsCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.curRoute = 'about-us';
  }]);
