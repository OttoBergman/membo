/**
 * Created by otto on 2016-01-09.
 */

'use strict';
angular.module('membo.factorys', ['ngResource'])

    .factory('Event', function($resource){
        return $resource('http://vis.eu-gb.mybluemix.net/events/:event', {}, {
            'get': {method: 'GET', isArray: true}
        });
    })


    .factory('Event', function($resource){
        return $resource('http://vis.eu-gb.mybluemix.net/events', {}, {
            'save': {method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                async: false
            }
        });
    })

    .factory('Member', function($resource){
        return $resource('http://vis.eu-gb.mybluemix.net/members/:member', {}, {
            'get': {method: 'GET', isArray: true}
        });
    })


    .factory('Member', function($resource){
        return $resource('http://vis.eu-gb.mybluemix.net/members', {}, {
            'save': {method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                async: false
            }
        });
    });