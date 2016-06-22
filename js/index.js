/**
 * Created by AdminNayad on 17/06/2016.
 */
var app = angular.module('40nuggets', []);

app.controller('tabs', function ($scope) {
    $scope.tabs = [{name: 'general'}, {name: 'integrations'}, {name: 'advanced'}];

    $scope.selected = $scope.tabs[0];

    $scope.select = function (tab) {
        $scope.selected = tab;
    };

    $scope.isSelected = function (name) {
        return $scope.selected && $scope.selected.name === name;
    };

});


