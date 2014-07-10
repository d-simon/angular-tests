(function () {
    'use strict';

    angular.module('dsApp.clients')
    .controller('ClientsCtrl', ['$scope',
        function ($scope) {
            $scope.clients = ['Dave', 'Aaron', 'Alex'];

            $scope.addClient = function (client) {
                if (client) $scope.clients.push(client);
            };

            $scope.deleteClient = function (client) {
                if ($scope.clients.length) {
                    var index = $scope.clients.indexOf(client);
                    if (index > -1) $scope.clients.splice(index, 1);
                }
            };
        }
    ]);

}());