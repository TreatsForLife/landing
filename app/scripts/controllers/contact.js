'use strict';

angular.module('landingApp')
  .controller('ContactCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.curRoute = 'contact';
  }]);
