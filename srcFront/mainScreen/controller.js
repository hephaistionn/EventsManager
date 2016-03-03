module.exports = app => {

    app.controller('main:controller', ['$scope', 'eventService', ($scope, eventService) => {

        $scope.model = {
            thread: [], /** Thread contains all events */
            openedEvent: null, /** Current event displayed in the detail panel  */
            search: '' /** Keyword to filter by title  */
        };

        $scope.actions = {
            /**
             * Action to update the events list.
             */
            updateList: () => {
                eventService.getEvents().then((events) => {
                    $scope.model.thread = events;
                });
            },
            /**
             * Action to open the detail panel with new event.
             */
            newEvent: ()=> {
                $scope.model.openedEvent = eventService.prepareEvent();
            },

            /**
             * Action to open the detail panel with specific event.
             *
             * @param {String} id
             */
            openEvent: (id)=> {
                eventService.getEvent(id).then((event)=> {
                    $scope.model.openedEvent = event;
                });
            },

            /**
             * Action to open the detail panel.
             */
            closeEvent: ()=> {
                $scope.model.openedEvent = null;
            },

            /**
             * Action to remove an event.
             *
             * @param {String} id
             */
            removeEvent: (id)=> {
                eventService.removeEvent(id).then(()=> {
                    $scope.actions.updateList();
                });
            },

            /**
             * Action to store an event (new or old).
             *
             * @param {Object} event
             */
            saveEvent: (event) => {

                /** event already registered*/
                if (event.id) {
                    eventService.updateEvent(
                        event.id,
                        event.title,
                        event.description,
                        event.date,
                        event.picture
                    ).then(()=> {
                            $scope.actions.updateList();
                        });
                    return;
                }
                /** event unregistered*/
                $scope.model.thread = eventService.addEvent(
                    event.title,
                    event.description,
                    event.date,
                    event.picture
                ).then(()=> {
                        $scope.actions.updateList();
                    });
            }
        };

        $scope.actions.updateList();

    }]);

};
