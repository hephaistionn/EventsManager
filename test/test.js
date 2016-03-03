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
        eventDate.setDate(eventDate.getDate() + 1);
        inputs.get(1).sendKeys(eventDate);
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

    it('should display new event', function() {
        thread = element(by.css('.thread'));
        refreshButton.click();
        var events = thread.all(by.css('.panel-primary'));
        var event = events.get(0);
        var eventTitle = event.element(by.tagName('h1'));
        expect(eventTitle.getText()).toEqual('titleA');
    });


});
