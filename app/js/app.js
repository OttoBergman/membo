'use strict';

/* App Module */

var memboApp = angular.module('memboApp', [
  'ngRoute',
  'memboAnimations',
  'memboControllers',
  'memboFilters',
  'memboServices',
  'ui.materialize',
  'ngDialog',
  'ngMaterial',
  'ngMessages',
  'ngAnimate'

]);

memboApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/events', {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }).
      when('/members', {
          templateUrl: 'templates/members.html',
          controller: 'MembersCtrl'
        }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }
});