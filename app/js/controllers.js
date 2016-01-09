'use strict';

/* Controllers */

var memboControllers = angular.module('memboControllers', []);

memboControllers.controller('HomeCtrl', ['$scope', 'ngDialog', '$routeParams', '$mdDialog',
    function ($scope, $routeParams, ngDialog, $mdDialog) {
        $scope.showLoginPopUp = function () {
            $mdDialog.show({
                controller: DialogController3,
                templateUrl: 'templates/LoginPopUp.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };

        function DialogController3($scope, $mdDialog) {
            $scope.member = {};
            $scope.tempMember = {};
            $scope.memberForm = {};
            $scope.memberForm.firstName = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                $mdDialog.hide();
            };
            $scope.ifEmpty = function () {

            };
        }

    }]);

memboControllers.controller('EventsCtrl', ['$scope', '$routeParams', 'ngDialog', '$mdDialog',
    function ($scope, $routeParams, ngDialog, $mdDialog) {
        $scope.price = 1350;
        $scope.informationList = [];
        $scope.searchMember = '';


        var memberList = [];

        var halloween = {
            name: "Halloween",
            startdate: new Date(),
            enddate: new Date(),
            ticketsTotal: 500,
            ticketsremaining: 150,
            ticketprice: 300,
            totalTemp: 50,
            remainingTemp: 23,
            amountDays: 1,
            memberlist: memberList
        };
        var christmas = {
            name: "Christmas",
            startdate: new Date(),
            enddate: new Date(),
            ticketsTotal: 300,
            ticketsremaining: 200,
            ticketprice: 200,
            totalTemp: 50,
            remainingTemp: 40,
            amountDays: 3,
            memberlist: memberList
        };

        $scope.informationList.push(halloween);
        $scope.informationList.push(christmas);


        var alex = {
            id: "10231231",
            issues: "OK!",
            name: "Alexander",
            family: "Spottka",
            sex: "m",
            birthday: new Date(),
            address: "Dongväg 10a",
            mobile: "03123131231",
            email: "alex.sp@posteo.de"
        };
        var otto = {
            id: "13371337",
            issues: "OK!",
            name: "Otto",
            family: "Bergmann",
            sex: "m",
            birthday: new Date(),
            address: "Stallvägen 10a",
            mobile: "2982929299",
            email: "otto1337@gmail.com"
        };
        var viktor = {
            id: "1238797",
            issues: "Has real life!",
            name: "Viktor",
            family: "Karlsson",
            sex: "m",
            birthday: new Date(),
            address: "RLväg 10a",
            mobile: "131514213",
            email: "viktor@reallife.com"
        };
        $scope.informationList[0]['memberlist'].push(alex);
        $scope.informationList[0]['memberlist'].push(otto);
        $scope.informationList[0]['memberlist'].push(viktor);


        $scope.showTabDialog = function () {
            $mdDialog.show({
                controller: AddMemberToEventController,
                templateUrl: 'templates/AddMemberToEventPopUp.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };


        $scope.showNewEventDialog = function () {
            $mdDialog.show({
                controller: createNewEventPopUpController,
                templateUrl: 'templates/CreateNewEventPopUp.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };

        $scope.showEditEventPopUp = function (event) {
            $scope.eventToChange = event;
            $mdDialog.show({
                controller: createNewEventPopUpController,
                templateUrl: 'templates/EditEventPopUp.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };


        $scope.showConfirmDeleteEvent = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Do you really want to delete this event?')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('Nooo');
            $mdDialog.show(confirm).then(function () {
                $scope.status = 'event was removed';

            }, function () {
                $scope.status = 'event was kept';
            });

        };


        $scope.showConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Do you really want to delete this user?')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('Nooo');
            $mdDialog.show(confirm).then(function () {
                $scope.status = 'Member was removed';

            }, function () {
                $scope.status = 'Member was kept';
            });

        };


        function AddMemberToEventController($scope, $mdDialog) {
            $scope.member = {};
            $scope.tempMember = {};
            $scope.memberForm = {};
            $scope.memberForm.firstName = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                $mdDialog.hide();
            };
            $scope.ifEmpty = function () {

            };
            $scope.opendatepicker = function () {
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15 // Creates a dropdown of 15 years to control year
                });
            }
        }

        function createNewEventPopUpController($scope, $mdDialog) {
            $scope.event = {};
            $scope.addEventForm = {};
            $scope.addEventForm.name = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                $mdDialog.hide();
            };
            $scope.ifEmpty = function () {

            };
            $scope.opendatepicker = function () {
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15 // Creates a dropdown of 15 years to control year
                });
            }
        }
    }]);

memboControllers.controller('MembersCtrl', ['$scope', '$routeParams', 'ngDialog', '$mdDialog',
    function ($scope, $routeParams, ngDialog, $mdDialog) {
        $scope.price = 1350;
        $scope.informationList = [];
        $scope.searchMember = '';


        var memberList = [];

        var halloween = {
            name: "Halloween",
            startdate: new Date(),
            enddate: new Date(),
            ticketsTotal: 500,
            ticketsremaining: 150,
            ticketprice: 300,
            totalTemp: 50,
            remainingTemp: 23,
            amountDays: 1,
            memberlist: memberList
        };
        var christmas = {
            name: "Christmas",
            startdate: new Date(),
            enddate: new Date(),
            ticketsTotal: 300,
            ticketsremaining: 200,
            ticketprice: 200,
            totalTemp: 50,
            remainingTemp: 40,
            amountDays: 3,
            memberlist: memberList
        };

        $scope.informationList.push(halloween);
        $scope.informationList.push(christmas);


        var alex = {
            id: "10231231",
            issues: "OK!",
            name: "Alexander",
            family: "Spottka",
            sex: "m",
            birthday: new Date(),
            address: "Dongväg 10a",
            mobile: "03123131231",
            email: "alex.sp@posteo.de",
            countryoforigin: "Germany",
            dietrestriction: "Sausage",
            studenttype: "blubb",
            VISnumber: "1232313123",
            LOM: "10000000 years",
            CBS: "yes",
            ADC: "no"
        };
        var otto = {
            id: "13371337",
            issues: "OK!",
            name: "Otto",
            family: "Bergmann",
            sex: "m",
            birthday: new Date(),
            address: "Stallvägen 10a",
            mobile: "2982929299",
            email: "otto1337@gmail.com",
            countryoforigin: "Sweden",
            dietrestriction: "Sausage",
            studenttype: "blubb",
            VISnumber: "1232313123",
            LOM: "1000 years",
            CBS: "yes",
            ADC: "no"
        };
        var viktor = {
            id: "1238797",
            issues: "Has real life!",
            name: "Viktor",
            family: "Karlsson",
            sex: "m",
            birthday: new Date(),
            address: "RLväg 10a",
            mobile: "131514213",
            email: "viktor@reallife.com",
            countryoforigin: "Sweden",
            dietrestriction: "no",
            studenttype: "blubb",
            VISnumber: "1232313123",
            LOM: "100000 years",
            CBS: "yes",
            ADC: "no"
        };

        $scope.informationList[0]['memberlist'].push(alex);
        $scope.informationList[0]['memberlist'].push(otto);
        $scope.informationList[0]['memberlist'].push(viktor);


        $scope.showAddMemberDialog = function () {
            $mdDialog.show({
                controller: DialogController2,
                templateUrl: 'templates/AddMemberToSystem.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };

        $scope.changeMember = function (person) {
            $scope.personChange = person;
            $mdDialog.show({
                controller: DialogController2,
                templateUrl: 'templates/ChangeMembersInSystem.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: $scope
            })
        };


        $scope.showConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Do you really want to delete this user?')
                .targetEvent(ev)
                .ok('Yes')
                .cancel('Nooo');
            $mdDialog.show(confirm).then(function () {
                $scope.status = 'Member was removed';

            }, function () {
                $scope.status = 'Member was kept';
            });
        };


        function DialogController2($scope, $mdDialog) {
            $scope.member = {};
            $scope.tempMember = {};
            $scope.memberForm = {};
            $scope.memberForm.firstName = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                $mdDialog.hide();
            };
            $scope.ifEmpty = function () {

            };
            $scope.opendatepicker = function () {
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15 // Creates a dropdown of 15 years to control year
                });
            }
        }

    }]);