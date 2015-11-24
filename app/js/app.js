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
  'ngMessages'

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
