module.exports = app => {

    app.service('eventService', ['apiService', function (apiService) {

        /**
         * Save new event
         *
         * @param {String} title
         * @param {String} description
         * @param {Date} date
         * @param {String} picture
         *
         * @returns {Promise}
         */
        this.addEvent = (title, description, date, picture) => {
            const id = Math.round(new Date().getUTCMilliseconds() * Math.random());
            return apiService.postEvent(id, title, description, date, picture);
        };

        /**
         * Create new event
         *
         * @returns {{title: string, desc: string, date: Date, picture: string}}
         */
        this.prepareEvent = () => {
            return {
                title: '',
                description: '',
                date: new Date(),
                picture: ''
            };
        };

        /**
         * Remove existing event
         *
         * @param {String} id
         * @returns {Promise}
         */
        this.removeEvent = (id) => {
            return apiService.deleteEvent(id)
        };

        /**
         * Edit existing event
         *
         * @param {String} id
         * @param {String=} title
         * @param {String=} description
         * @param {Date=} date
         * @param {String=} picture
         * @returns {Promise}
         */
        this.updateEvent = (id, title, description, date, picture) => {
            return apiService.putEvent(id, title, description, date, picture);
        };

        /**
         * Get event by id
         *
         * @param {String} id
         * @returns {Promise}
         */
        this.getEvent = (id) => {
            return apiService.getEvent(id).then((event)=> {
                event.date = new Date(event.date);
                return event;
            });
        };

        /**
         * Returns all events
         *
         * @returns {Promise}
         */
        this.getEvents = () => {
            return apiService.getEvents().then(function (events) {
                events.map(event => {
                    event.date = new Date(event.date);
                });
                return events;
            });
        };

    }]);

};
