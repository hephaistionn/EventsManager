module.exports = app => {

    app.service('apiService', ['$http', function ($http) {

        this.getEvents = () => {
            return $http.get('api/events').then((response)=> {
                return response.data;
            });
        };

        this.postEvent = (id, title, description, date, picture) => {
            return $http.post('api/events', {
                id: id,
                title: title,
                description: description,
                date: date,
                picture: picture
            });
        };

        this.getEvent = (id) => {
            return $http.get('api/events/' + id).then((response)=> {
                return response.data;
            });
        };

        this.putEvent = (id, title, description, date, picture) => {
            return $http.put('api/events/' + id, {
                title: title,
                description: description,
                date: date,
                picture: picture
            });
        };

        this.deleteEvent = (id) => {
            return $http.delete('api/events/' + id);
        };

    }]);

};
