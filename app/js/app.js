'use strict';

/* App Module */

var memboApp = angular.module('memboApp', [
  'ngRoute',
  'memboAnimations',

  'memboControllers',
  'memboFilters',
  'memboServices',
  'ui.materialize'
]);

memboApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: '../templates/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
