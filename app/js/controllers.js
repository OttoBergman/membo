'use strict';

/* Controllers */

var memboControllers = angular.module('memboControllers', []);

memboControllers.controller('HomeCtrl', ['$scope', 'ngDialog', '$routeParams', '$mdDialog',
    function ($scope, $routeParams, ngDialog, $mdDialog) {
        

    }]);

//EVENT CONTROLLER
memboControllers.controller('EventsCtrl', ['$scope', '$routeParams', 'ngDialog', '$mdDialog', 'Event','RootData',
    function ($scope, $routeParams, ngDialog, $mdDialog, Event, RootData) {
        $scope.eventList = [];
        $scope.eventList = Event.query(function() {
            console.log($scope.eventList)
        });

        $scope.subList = [];
        $scope.subList = Event

        $scope.searchMember = '';
        $scope.showAddMemberToEventPopUp = function () {
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
            RootData.setEvent(event);
            $mdDialog.show({
                controller: editEventController,
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
            $scope.addEventForm = {};
            //$scope.addEventForm.name = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function () {
                Event.save($scope.addEventForm);
                console.log($scope.addEventForm);
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

        function editEventController($scope, $mdDialog) {
                $scope.changeEvent = RootData.getEvent();
                $scope.tempEvent = JSON.parse(JSON.stringify($scope.changeEvent));

                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function () {
                    $scope.changeEvent = $scope.tempEvent;
                    Event.update({eventId: $scope.changeEvent.eventID}, $scope.changeEvent);
                    console.log($scope.changeEvent);
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


//MEMMBER CONTROLLER
memboControllers.controller('MembersCtrl', ['$scope', '$routeParams', 'ngDialog', '$mdDialog', 'Member', 'RootData',
    function ($scope, $routeParams, ngDialog, $mdDialog, Member, RootData) {
        $scope.informationList = [];
        $scope.informationList = Member.query(function() {
            console.log($scope.informationList)
        });
        $scope.searchMember = '';

        $scope.showAddMemberDialog = function () {
            $mdDialog.show({
                controller: addMemberController,
                templateUrl: 'templates/AddMemberToSystem.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            })
        };

        $scope.showChangeMemberDialog = function (person) {
            RootData.setPerson(person);
            $mdDialog.show({
                controller: changeMemberController,
                templateUrl: 'templates/ChangeMembersInSystem.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true

            })
        };


        function addMemberController($scope, $mdDialog) {
            $scope.member = {};
            $scope.addMember = {};
            $scope.addMember.can_be_shared = "No";
            $scope.addMember.accepts_data_collection = "No";
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
                var date = new Date().toString();
                $scope.addMember.date_added = date;
                Member.save($scope.addMember);
                console.log($scope.addMember);
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

        function changeMemberController($scope, $mdDialog) {
            $scope.member = {};
            $scope.changeMember = RootData.getPerson();
            $scope.tempMember = JSON.parse(JSON.stringify($scope.changeMember));
            $scope.memberForm = {};
            $scope.memberForm.firstName = {minlength: 5, maxlength: 25, required: true};

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.accept = function () {
                $scope.changeMember = $scope.tempMember;
                Member.update({memberId: $scope.changeMember.id}, $scope.changeMember);
                console.log($scope.changeMember);
                $mdDialog.hide();
            };

            $scope.ifEmpty = function () {

            };

            $scope.showDeleteConfirm = function (ev) {
                var confirm = $mdDialog.confirm()
                    .title('Do you really want to delete this user?')
                    .targetEvent(ev)
                    .ok('Yes')
                    .cancel('Nooo');
                $mdDialog.show(confirm).then(function () {
                    Member.delete({memberId: $scope.changeMember.id});
                    $scope.status = 'Member was removed';

                }, function () {
                    $scope.status = 'Member was kept';
                });
            };

            $scope.opendatepicker = function () {
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 15 // Creates a dropdown of 15 years to control year
                });
            }
        }

    }]);