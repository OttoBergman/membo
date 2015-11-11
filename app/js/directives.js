'use strict';

/* Directives */

app.directive('navMenu', ['$parse', '$compile', function($parse, $compile) {
    return {
        restrict: 'E', //Element
        scope: true,
        link: function (scope, element, attrs) {
            scope.$watch(attrs.menuData, function (val) {
                var template = angular.element('<ul id="parentTreeNavigation"><li ng-repeat="node in ' + attrs.menuData + '" ng-class="{active:node.active && node.active==true, \'has-dropdown\': !!node.children && node.children.length}"><a ng-href="{{node.href}}" ng-click="{{node.click}}" target="{{node.target}}" >{{node.text}}</a><sub-navigation-tree></sub-navigation-tree></li></ul>');
                var linkFunction = $compile(template);
                linkFunction(scope);
                element.html(null).append(template);
            }, true);
        }

    }
}]);