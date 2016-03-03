require("angular");

const app = angular.module('app', []);

require("./services/apiService")(app);
require("./services/eventService")(app);
require("./directives/event")(app);
require("./directives/eventDetail")(app);

require("./mainScreen")(app);
