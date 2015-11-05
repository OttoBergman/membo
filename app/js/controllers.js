'use strict';

/* Controllers */

var memboControllers = angular.module('memboControllers', []);

memboControllers.controller('HomeCtrl', ['$scope', 'Phone',
  function($scope) {

  }]);

memboControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
