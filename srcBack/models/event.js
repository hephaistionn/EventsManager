
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:test@ds019648.mlab.com:19648/eventsdata', function(err) {
    if(err){
        console.info('mongodb connect fail',err);
        throw err;
    } else {
        console.info('mongodb connect');
    }
});

const EventSchema = new Schema({
    id: String,
    title: String,
    picture: String,
    description: String,
    date: { type: Date }
});

module.exports = mongoose.model('Event', EventSchema);
