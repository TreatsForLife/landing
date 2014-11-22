'use strict';

angular.module('landingApp')
  .controller('RootCtrl', ['$scope', '$rootScope', '$timeout', '$interval', '$location', '$http', function ($scope, $rootScope, $timeout, $interval, $location, $http) {

    console.log('APP VERSION: 1.0');

    //Global scope vars
    $rootScope.isWeb = $(window).width() > 700;
    $rootScope.isIphone = (navigator.userAgent.indexOf('iPhone') > 0);


    //get localstorage data
    console.log('Getting data from cookies', localStorage);
    $rootScope.fb_id = localStorage.fb_id;
    $rootScope.user_id = localStorage.user_id;
    $rootScope.user_pet_id = localStorage.user_pet_id;


    //General utils functions
    $rootScope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    }
    $rootScope.reloadApp = function () {
      top.location.reload();
    }
    $rootScope.fbShare = function (link, picture, name, caption, action, callback) {
      $scope.showDialog('share-disabled');
      return true;
    }
    $rootScope.runAnimation = function (selector, duration, frames, dim, callback) {
      $(selector).css('background-size', (dim * frames) + 'px auto');
      var frame = frames;
      var animationBgPosition = 0;
      var animationInterval = $interval(function () {
        if (frame == 0 && (angular.isFunction(callback))) {
          $interval.cancel(animationInterval);
          $timeout(function () {
            callback();
          });
          $timeout(function () {
            $(selector).css('background-position-x', 0);
          }, 1000);
          return;
        }
        $(selector).css('background-position-x', -1 * animationBgPosition);
        frame--;
        animationBgPosition += dim;
      }, (duration / frames))
    }


    //loading screen
    $scope.logoAnimationComplete = false;
    $scope.animateSplashScreen = function () {
      $rootScope.runAnimation('.not-online-logo-animation', 1700, 48, 266, function () {
        $timeout(function () {
          $scope.logoAnimationComplete = true;
          $rootScope.notOnlineAnimationCompleted = true;
        }, 500);
        $timeout(function(){
          $scope.logoAnimationCompleteDelayed = true;
        }, 1300)
        $timeout(function(){
          $scope.logoAnimationCompleteDelayedPlus = true;
        }, 2500)
      });
    }
    $timeout(function () {
      $scope.siteIsReady = true;
    }, 500);
    $timeout(function () {
      $scope.animateSplashScreen();
    }, 1500);

    //app init
    function init() {
      $scope.canAnimate = true;
      $rootScope.windowHeight = $(window).height();
      $rootScope.windowWidth = $(window).width();
      $rootScope.containerWrapperWidth = $('.container-wrapper').width();
      $rootScope.containerWrapperHeight = $('.container-wrapper').height();
      $rootScope.containerWidth = $('.container').width();
      $rootScope.containerHeight = $('.container').height();
      $rootScope.picHeight = $('.container').width() * 0.6;
      $timeout(function () {
        window.scrollTo(0, 1);
      }, 1000);
    }

    $timeout(function () {
      init();
    }, 5);

  }]);
