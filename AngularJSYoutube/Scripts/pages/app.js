var myApp = angular.module("myApp", ['ngAnimate', 'ui.bootstrap']);


myApp.controller("myController", myController);

myController.$inject = ['$scope', '$http', '$sce', '$rootScope', '$compile'];

function myController($scope, $http, $sce, $rootScope, $compile) {

    $scope.employees = [
        { "id": 1, "name": "Hasan", "surname": "Mirzaoğlu", "email": "hasan@gmail.com", "cinsiyet": "erkek" },
        { "id": 2, "name": "Leyla", "surname": "Cakıcı", "email": "leyla@gmail.com", "cinsiyet": "kadın" },
        { "id": 2, "name": "Mahmut", "surname": "Yıldız", "email": "mahmut@gmail.com", "cinsiyet": "erkek" },
        { "id": 2, "name": "Barış", "surname": "Kurt", "email": "baris@gmail.com", "cinsiyet": "erkek" },
        { "id": 2, "name": "Fırat", "surname": "Tanrıkulu", "email": "firat@gmail.com", "cinsiyet": "erkek" },
        { "id": 2, "name": "Ayşe", "surname": "Ateş", "email": "ayse@gmail.com", "cinsiyet": "kadın" },
        { "id": 2, "name": "Fatma", "surname": "Kılıç", "email": "fatma@gmail.com", "cinsiyet": "kadın" },

    ];


    $scope.toFilter = function (keyword) {

        if ($scope.select1 ==="undefined" && $scope.select2 ==="undefined") {
            return true;
        } 
        else {
            return $scope.select1 === keyword.cinsiyet || $scope.select2 === keyword.cinsiyet;

        }

    };


};


