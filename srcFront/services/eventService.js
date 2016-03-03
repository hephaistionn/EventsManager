module.exports = app => {

    const _ = require('lodash');

    app.service('eventService', ['apiService', function (apiService) {

        /**
         * save new event
         * @param {String} title
         * @param {String} description
         * @param {Date} date
         * @param {String} picture
         */
        this.addEvent = (title, description, date, picture) => {
            const id = Math.round(new Date().getUTCMilliseconds() * Math.random());
            return apiService.postEvent(id, title, description, date, picture);
        };

        /**
         * Create new event
         * @param {String} title
         * @param {String} description
         * @param {Date} date
         * @param {String} picture
         */
        this.prepareEvent = () => {
            return {
                title: '',
                desc: '',
                date: new Date(),
                picture: ''
            };
        };

        /**
         * Remove existing event
         * @param {String} id
         */
        this.removeEvent = (id) => {
            return apiService.deleteEvent(id)
        };

        /**
         * Edit existing event
         * @param {String} id
         * @param {String=} title
         * @param {String=} description
         * @param {Date=} date
         * @param {String=} picture
         */
        this.updateEvent = (id, title, description, date, picture) => {
            return apiService.putEvent(id, title, description, date, picture);
        };

        /**
         * Get event by id
         * @param {String} id
         * @returns {Object}
         */
        this.getEvent = (id) => {
            return apiService.getEvent(id).then((event)=> {
                event.date = new Date(event.date);
                return event;
            });
        };

        /**
         * Returns all events
         * @returns {Promise}
         */
        this.getEvents = () => {
            return apiService.getEvents().then(function (events) {
                console.log('succes request');
                events.map(event => {
                    event.date = new Date(event.date);
                });
                return events;
            }, function (data) {
                console.log('bad request');
            });
        };

    }]);

};
