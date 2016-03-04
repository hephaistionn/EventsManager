describe('Protractor Demo App', function() {

    browser.get('http://localhost:3000/');

    var thread = element(by.css('.thread'));
    var panelHeadings = element(by.css('.navbar-form'));
    var headerButtons = panelHeadings.all(by.tagName('button'));
    var creationButton = headerButtons.first();
    var refreshButton = headerButtons.last();

    it('should show event editor', function() {
        var modal = element(by.css('.modal-dialog'));
        expect(modal.isPresent()).toBe(false);
        creationButton.click();
        modal = element(by.css('.modal-dialog'));
        expect(modal.isPresent()).toBe(true);
    });

    it('should create new event', function() {
        var modal = element(by.css('.modal-dialog'));
        var modelTitle = modal.element(by.css('.modal-title'));
        expect(modelTitle.getText()).toEqual('Event Editor');
        var inputs = modal.all(by.tagName('input'));
        inputs.get(0).sendKeys('titleA');

        var eventDate = new Date();
        eventDate.setDate(eventDate.getDate());
        //inputs.get(1).sendKeys(eventDate); //bug protractor, the date is corrupted.

        inputs.get(2).sendKeys('https://cdn0.iconfinder.com/data/icons/science-7/512/test-tube-128.png');
        var textarea = modal.all(by.tagName('textarea'));
        textarea.sendKeys('DescriptionA');

         var buttons = modal.all(by.tagName('button'));
         buttons.get(1).click();
         modelTitle = modal.element(by.css('.modal-title'));
         expect(modelTitle.getText()).toEqual('Event Details');

         buttons.get(0).click();
         modal = element(by.css('.modal-dialog'));
         expect(modal.isPresent()).toBe(false);
    });

    it('should display new event', function(cb) {
        thread = element(by.css('.thread'));
        var events = thread.all(by.css('.panel-primary'));

        var titles = '';
        events.each(event => {
            var eventTitle = event.element(by.tagName('h1'));
            return eventTitle.getText().then(function (text) {
                titles += text;
            });
        });
        setTimeout(() =>{
            expect(titles.indexOf('titleA')).not.toEqual(-1);
            cb()
        }, 500);
    });

    it('should remove new event', function() {
        thread = element(by.css('.thread'));
        var events = thread.all(by.css('.panel-primary'));
        var event = events.get(0);
        var closeButton = event.element(by.tagName('button'));
        var eventTitle = event.element(by.tagName('h1'));
        expect(eventTitle.getText()).toEqual('titleA');
        closeButton.click();
        events = thread.all(by.css('.panel-primary'));
        events.each(event => {
            var eventTitle = event.element(by.tagName('h1'));
            expect(eventTitle.getText()).not.toEqual('titleA');
        });
    });

});
