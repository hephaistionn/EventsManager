module.exports = app => {

    app.filter('filterEvent', function () {
        return function (input, search) {
            if (!input) return input;

            /** sort by date */

            input.sort((a, b)=> {
                return (a.date > b.date ? 1 : -1);
            });
            if (!search) return input;

            /** filter by title */

            const expected = ('' + search).toLowerCase();
            const result = [];
            input.map(event => {
                let title = ('' + event.title).toLowerCase();
                if (title.indexOf(expected) !== -1) {
                    result.push(event)
                }
            });
            return result;
        }
    });

};
