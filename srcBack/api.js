module.exports = (app) => {

    const Event = require('./models/event');

    const express = require('express');
    const router = express.Router();

    router.get('/events', function(req, res) {
        Event.find(function(err, event) {
            if (err)
                res.status(500).send(err);

            res.json(event);
        });
    });

    router.post('/events', function(req, res) {

        const params = req.body;

        if(!params.id || !params.title || !params.picture || !params.description || !params.date ){
            res.status(500).send({ error: 'Bad params' + JSON.stringify(params) });
            return;
        }

        const event = new Event();
        event.id = params.id;
        event.title = params.title;
        event.picture = params.picture;
        event.date = params.date;
        event.save(function(err) {
            if (err)
                res.status(500).send(err);
            res.json({ message: 'Event created!' });
        });
    });

    router.get('/events/:id', function(req, res) {
            Event.findOne({id: req.params.id}, function(err, event) {
                if (err)
                    res.status(500).send(err);
                res.json(event);
            });
        });

    router.put('/events/:id', function(req, res) {

            Event.findOne({id: req.params.id}, function(err, event) {

                if (err)
                    res.status(500).send(err);

                const params = req.body;
                if(!params.title || !params.picture || !params.description || !params.date ){
                    res.status(500).send({ error: 'Bad params' + JSON.stringify(params) });
                    return;
                }
                event.title = params.title;
                event.picture = params.picture;
                event.description = params.description;
                event.date = params.date;
                event.save(function(err) {
                    if (err)
                        res.status(500).send(err);
                    res.json({ message: 'Event updated!' });
                });

            });
        });

    router.delete('/events/:event_id', function(req, res) {
        Event.remove({
            id: req.params.event_id
        }, function(err, event) {
            if (err)
                res.status(500).send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


    app.use('/api', router);


};
