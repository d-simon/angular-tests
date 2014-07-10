describe('ClientsCtrl', function () {

    // load the controllers module
    beforeEach(module('ng-html2js-templates'))
    beforeEach(module('dsApp.clients'))

    var ClientsCtrl
      , scope
      ;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ClientsCtrl = $controller('ClientsCtrl', {
            $scope: scope
        })
    }))

    it('should transition to clients.list', inject(function ($state, $rootScope) {
        $state.transitionTo('clients.list');
        $rootScope.$apply();
        expect($state.current.name).toBe('clients.list');
    }))

    it('should create a clients array with 3 clients', function () {
        expect(scope.clients.length).toBe(3);
    })

    it('should add a client', function () {
        scope.addClient('Urs');
        expect(scope.clients.length).toBe(4);
    })

    it('should add and delete a client by Name', function () {
        scope.addClient('Urs');
        expect(scope.clients.length).toBe(4);
        scope.deleteClient('Urs');
        expect(scope.clients.length).toBe(3);
    })
})