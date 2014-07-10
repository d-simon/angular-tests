describe('/#/clients', function() {
    browser.get('/#/clients');

    var input = element(by.model('searchQuery'));
    var clients = element.all(by.repeater('client in clients | filter:searchQuery'));

    it('should filter clients with input field', function() {
        input.sendKeys('Dave');
        expect(clients.count()).toBe(1);
        input.clear();
        expect(clients.count()).toBe(3);
    });
});