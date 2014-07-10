(function () {
    'use strict';

    angular.module('dsApp', [
        'ui.router',
        'dsApp.clients'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/clients');
        }
    ]);

}());