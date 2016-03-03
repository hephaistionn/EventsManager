module.exports = app => {

    const _ = require('lodash');

    app.controller('main:controller', ['$scope', 'eventService', ($scope, eventService) => {

        $scope.model = {
            thread: [],
            opendedEvent: null,
            search: ''
        };

        $scope.actions = {
            updateList: () => {
                eventService.getEvents().then((events) => {
                    $scope.model.thread = events;
                });
            },
            newEvent: ()=> {
                $scope.model.openedEvent = eventService.prepareEvent();
            },
            openEvent: (id)=> {
                eventService.getEvent(id).then((event)=> {
                    $scope.model.openedEvent = event;
                });
            },
            closeEvent: ()=> {
                $scope.model.openedEvent = null;
            },
            removeEvent: (id)=> {
                eventService.removeEvent(id).then(()=> {
                    $scope.actions.updateList();
                });
            },
            saveEvent: () => {
                if ($scope.model.openedEvent.id) {
                    eventService.updateEvent(
                        $scope.model.openedEvent.id,
                        $scope.model.openedEvent.title,
                        $scope.model.openedEvent.description,
                        $scope.model.openedEvent.date,
                        $scope.model.openedEvent.picture
                    ).then(()=> {
                            $scope.actions.updateList();
                        });
                    return;
                }
                $scope.model.thread = eventService.addEvent(
                    $scope.model.openedEvent.title,
                    $scope.model.openedEvent.description,
                    $scope.model.openedEvent.date,
                    $scope.model.openedEvent.picture
                ).then(()=> {
                        $scope.actions.updateList();
                    });
            }

        };

        $scope.actions.updateList();

    }]);

};
