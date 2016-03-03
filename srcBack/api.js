module.exports = (app) => {

    const Event = require('./models/event');

    const express = require('express');
    const router = express.Router();

    router.get('/events', function(req, res) {
        Event.find(function(err, event) {
            if (err)
                res.send(err);

            res.json(event);
        });
    });

    router.post('/events', function(req, res) {

        const params = req.body;

        console.log("router.post('/events'");
        console.log(params);

        if(!params.id || !params.title || !params.picture || !params.description || !params.date ){
            res.json({ message: 'Bad params' });
            return;
        }

        const event = new Event();
        event.id = params.id;
        event.title = params.title;
        event.picture = params.picture;
        event.description = params.description;
        event.date = params.date;
        event.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Event created!' });
        });
    });

    router.get('/events/:id', function(req, res) {
            Event.findOne({id: req.params.id}, function(err, event) {
                if (err)
                    res.send(err);
                res.json(event);
            });
        });

    router.put('/events/:id', function(req, res) {

            Event.findOne({id: req.params.id}, function(err, event) {

                if (err)
                    res.send(err);

                const params = req.body;
                console.log(params);
                if(!params.title || !params.picture || !params.description || !params.date ){
                    res.json({ message: 'Bad params' });
                    return;
                }
                event.title = params.title;
                event.picture = params.picture;
                event.description = params.description;
                event.date = params.date;
                event.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({ message: 'Event updated!' });
                });

            });
        });

    router.delete('/events/:event_id', function(req, res) {
        Event.remove({
            id: req.params.event_id
        }, function(err, event) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


    app.use('/api', router);


};
