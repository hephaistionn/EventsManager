module.exports = app => {

    app.directive("eventdetail", ['eventService', function(eventService){
        return {
            restrict: 'E',
            templateUrl: 'directives/eventDetail/template.html',
            replace: true,
            scope: { event: '=', close: '=', save: '=' },
            link: function($scope){

                $scope.model = {
                    event: $scope.event,
                    editing: $scope.event.id===undefined
                };

                $scope.actions = {
                    edit: () => {
                        $scope.model.editing = true;
                    },
                    save: () => {
                        $scope.model.editing = false;
                        $scope.save();
                    },
                    close: $scope.close
                };



            }
        };
    }]);

};
