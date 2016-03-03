
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./srcBack/statics')(app);
require('./srcBack/api')(app);


const port = process.env.PORT||3000;
const server = app.listen(port, function() {
  console.info('server start on port ' + port);
});
