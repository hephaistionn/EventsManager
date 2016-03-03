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
                    editing: $scope.event.id===undefined,
                    warning: ""
                };

                $scope.actions = {
                    edit: () => {
                        $scope.model.editing = true;
                    },
                    save: () => {
                        if(!$scope.model.title) {
                            $scope.model.warning = "need title !";
                            return;
                        }else if(!$scope.model.description) {
                            $scope.model.warning = "need description !";
                            return;
                        }else if(!$scope.model.picture) {
                            $scope.model.warning = "need picture !";
                            return;
                        }
                        $scope.model.warning = "";

                        $scope.model.editing = false;
                        $scope.save();


                    },
                    close: $scope.close
                };



            }
        };
    }]);

};
