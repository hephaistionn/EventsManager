module.exports = app => {
    require('./controller')(app);
    require('./filter')(app);
};
