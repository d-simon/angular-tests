(function () {
    'use strict';

    angular.module('dsApp.clients', ['ui.router'])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('clients', {
                    abstract: true,
                    url: '/clients',
                    template:'<ui-view></ui-view>'
                })
                .state('clients.list', {
                    url: '',
                    templateUrl: 'clients/clients.tpl.html',
                    controller: 'ClientsCtrl'
                });
        }
    ]);

}());