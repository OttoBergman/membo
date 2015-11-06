'use strict';

/* Controllers */

var memboControllers = angular.module('memboControllers', []);

memboControllers.controller('HomeCtrl', ['$scope',
  function($scope) {

  }]);

memboControllers.controller('EventsCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.price = 1350;
    $scope.informationList = new Array();
    var memberList = new Array();

    var halloween = {name:"Halloween", startdate:new Date(), enddate:new Date(), ticketsTotal:500, ticketsremaining:150, ticketprice:300, totalTemp:50, remainingTemp:23, amountDays:1 , memberlist:memberList}
    var christmas = {name:"Christmas", startdate:new Date(), enddate:new Date(), ticketsTotal:300, ticketsremaining:200, ticketprice:200, totalTemp:50, remainingTemp:40, amountDays:3 }

    $scope.informationList.push(halloween);
    $scope.informationList.push(christmas);




    var alex ={id:"10231231", issues:"OK!", name:"Alexander", family:"Spottka", sex:"m", birthday:new Date(), address:"Dongväg 10a", mobile:"03123131231", email:"alex.sp@posteo.de"}
     $scope.informationList[0].memberlist.push(alex);

  }]);

memboControllers.controller('MembersCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {



  }]);
