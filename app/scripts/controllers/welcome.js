'use strict';

angular.module('landingApp')
  .controller('WelcomeCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$location', function ($scope, $rootScope, $timeout, $interval, $location) {

    console.log('WelcomeCtrl');

    $rootScope.bodyClass = 'welcome';
    $rootScope.bodyBg = 'welcome';
    $rootScope.curRoute = 'welcome';
    $rootScope.curLang = 'hebrew';

    $scope.placeLogo = function (iterations) {
      if (typeof iterations == 'undefined') iterations = 5;
      $timeout(function () {
        $rootScope.windowHeight = $(window).height();
        $rootScope.windowWidth = $(window).width();

        $scope.logoSpace = parseInt($rootScope.windowHeight - $('.bottom-wrapper').height()) - 20;
        $scope.logoHeight = parseInt((($scope.logoSpace - 80) > 370) ? 370 : ($scope.logoSpace - 80));

        $scope.logoWidth = parseInt($scope.logoHeight / 370 * 266);
        $scope.logoHeight = 370 * $scope.logoWidth / 266;
        $scope.logoMargin = parseInt(($scope.logoSpace - $scope.logoHeight) / 2);

        $scope.logoSpacePX = $scope.logoSpace + 'px';
        $scope.logoHeightPX = $scope.logoHeight + 'px';
        $scope.logoMarginPX = $scope.logoMargin + 'px auto';
        $scope.logoWidthPX = $scope.logoWidth + 'px';

        if (iterations > 0) {
          $timeout(function () {
            $scope.placeLogo(iterations - 1);
          }, 1000);
        }
      });
    }

    $scope.toggleLang = function(){
      if ($rootScope.curLang == 'hebrew') {
        $rootScope.curLang = 'english';
      }else{
        $rootScope.curLang = 'hebrew';
      }
    }

    window.debug = $scope;
  }]);
