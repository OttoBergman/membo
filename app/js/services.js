'use strict';

/* Services */

var memboServices = angular.module('memboServices', ['ngResource']);

memboServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
