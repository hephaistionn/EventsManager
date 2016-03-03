module.exports = (app) => {

    const express = require('express');

    app.use(express.static('dist'));

};
