'use strict';

/* Controllers */

var memboControllers = angular.module('memboControllers', []);

memboControllers.controller('HomeCtrl', ['$scope',
  function($scope) {

  }]);

memboControllers.controller('EventsCtrl', ['$scope', '$routeParams', 'ngDialog','$mdDialog',
  function($scope, $routeParams, ngDialog, $mdDialog) {
    $scope.price = 1350;
    $scope.informationList = new Array();
    $scope.searchMember = '';


    var memberList = new Array();

    var halloween = {name:"Halloween", startdate:new Date(), enddate:new Date(), ticketsTotal:500, ticketsremaining:150, ticketprice:300, totalTemp:50, remainingTemp:23, amountDays:1 , memberlist:memberList};
    var christmas = {name:"Christmas", startdate:new Date(), enddate:new Date(), ticketsTotal:300, ticketsremaining:200, ticketprice:200, totalTemp:50, remainingTemp:40, amountDays:3, memberlist:memberList};

    $scope.informationList.push(halloween);
    $scope.informationList.push(christmas);


    var alex ={id:"10231231", issues:"OK!", name:"Alexander", family:"Spottka", sex:"m", birthday:new Date(), address:"Dongväg 10a", mobile:"03123131231", email:"alex.sp@posteo.de"};
    var otto ={id:"13371337", issues:"OK!", name:"Otto", family:"Bergmann", sex:"m", birthday:new Date(), address:"Stallvägen 10a", mobile:"2982929299", email:"otto1337@gmail.com"};
    var viktor ={id:"1238797", issues:"Has real life!", name:"Viktor", family:"Karlsson", sex:"m", birthday:new Date(), address:"RLväg 10a", mobile:"131514213", email:"viktor@reallife.com"}
    $scope.informationList[0]['memberlist'].push(alex);
    $scope.informationList[0]['memberlist'].push(otto);
    $scope.informationList[0]['memberlist'].push(viktor);



    $scope.showTabDialog = function() {
      $mdDialog.show({
            controller: DialogController ,
            templateUrl: 'templates/AddMemberToEventPopUp.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
          })
    };



    function DialogController($scope, $mdDialog) {
      $scope.member = {};
      $scope.tempMember = {};
      $scope.memberForm = {};
      $scope.memberForm.firstName = {minlength: 5, maxlength: 25,required: true};

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function() {
        $mdDialog.hide();
      }
      $scope.ifEmpty = function(){

      }
        $scope.opendatepicker = function(){
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15 // Creates a dropdown of 15 years to control year
            });
        }
    }




  }]);

memboControllers.controller('MembersCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

  }]);
