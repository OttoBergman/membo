/**
 * Created by otto on 2016-01-09.
 */


angular.module('memboFactorys', ['ngResource'])

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
    })

    .factory('RootData', function($localstorage){

        var currentPerson = {};
        var currentEvent = {};


        return {
            setPerson: function (person) {
                currentPerson = person;
            },
            getPerson: function () {
                return currentPerson;
            },
            setEvent: function(event) {
                currentEvent = event;
            },
            getEvent: function() {
                return currentEvent;
            }

        };
    })

//Local Storage factory, used instead of database to persist data between uses
    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '[]');
            }
        }
    }]);