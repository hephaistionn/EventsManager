module.exports = app => {

    app.directive("eventdetail", function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/eventDetail/template.html',
            replace: true,
            scope: {event: '=', close: '=', save: '='},
            link: function ($scope) {

                $scope.model = {
                    event: $scope.event,
                    editing: $scope.event.id === undefined,
                    warning: ""
                };

                $scope.actions = {
                    /**
                     * Action to switch in edit mode
                     */
                    edit: () => {
                        $scope.model.editing = true;
                    },

                    /**
                     * Action to save the current event displayed
                     */
                    save: () => {
                        if (!$scope.event.title) {
                            $scope.model.warning = "need title !";
                            return;
                        } else if (!$scope.event.description) {
                            $scope.model.warning = "need description !";
                            return;
                        } else if (!$scope.event.picture) {
                            $scope.model.warning = "need picture !";
                            return;
                        } else if (!$scope.event.date) {
                            $scope.model.warning = "past time !";
                            return;
                        }
                        $scope.model.warning = "";

                        $scope.model.editing = false;
                        $scope.save($scope.event);
                    },
                    close: $scope.close
                };
            }
        };
    });

};
