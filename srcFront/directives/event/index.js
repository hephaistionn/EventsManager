module.exports = app => {

    app.directive("event", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/event/template.html',
            replace: true,
            scope: { event: '=', remove: '=', open: '=' }
        };
    });

};
