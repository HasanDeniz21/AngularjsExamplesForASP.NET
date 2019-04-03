myApp.controller("myController", myController);

myController.$inject = ['$scope', '$http', '$sce', '$rootScope', '$compile'];

function myController($scope, $http, $sce, $rootScope, $compile) {

    //-------Get-------
    //$http.get("https://jsonplaceholder.typicode.com/posts", $scope.information).then(function (response) {
    //    $scope.data = response.data;
    //});

    //*****************List*********************************************
    //$scope.users = [
    //    { id:1 ,"name": "Hasan", "age": "28" },
    //    { id:2 ,"name": "Murat", "age": "33" },
    //    { id:3 ,"name": "Mahmut", "age": "19" },
    //    { id:4 ,"name": "Barış", "age": "22" },
    //    { id:5 ,"name": "Sevgi", "age": "45" },
    //    { id:6 ,"name": "Ahmet", "age": "54" },
    //];

    //$scope.deger1 = 0;
    //$scope.deger = 0;


    //************Index***************************************************
    //$scope.tools = ["Araba", "Kamyon", "Tren", "Uçak", "Gemi"];
    //$scope.deleteTool = function (value) {

    //    alert("Silmek istediğinzden Emin misiniz ?");
    //    $scope.tools.splice(value, value + 1);

    //}

    //***********Image Src ,$sce******************************************
    //$scope.data = "";
    //$scope.getHtmlTag = function () {

    //    $scope.imageUrl = "https://cdn.okul.com.tr/galleries/3/1/630x420/16-year-old-artist-dimitra-milan-1.jpg";
    //    $scope.data = $sce.trustAsHtml("<h1>This image created By Angular</h1>");

    //};


    // ************ Create Dynamic form**********************************
    //$scope.addNewDiv = function () {

    //    angular.element(document.getElementById('deneme')).append('<div id="createdDiv"><label>Name:<input type="text"/></label><label> Surname:<input type="text" /></label ><label> Age:<input type="text"/></label><button class="btn btn-success" ng-click="addNewDiv()"> Ekle </button> <button ng-show="count > 0" class="btn btn-danger" ng-click="deleteDiv()"> Sil </button></div>');
    //};

    //$scope.deleteDiv = function () {
    //    angular.element(createdDiv).remove(createdDiv);
    //};

    //********ng-include************************************************
    //$scope.page = "page1.html";


    //******** watch *****************************************************
    //girilen değeri takip eder
    //$scope.value = 0;
    //$scope.warning = "";

    //$scope.$watch("value", function () {
    //    if ($scope.value == 10) {
    //        $scope.warning = "Be carefull you much increase value";
    //        $scope.value = 9;
    //    }
    //});

    // **********Filter****************************************************
    //$scope.value = 0;
    //$scope.personal = [
    //    { id: 1, "name": "Hasan", "age": "28", "salary": 200 },
    //    { id: 2, "name": "Murat", "age": "33", "salary": 300 },
    //    { id: 3, "name": "Mahmut", "age": "19", "salary": 150 },
    //    { id: 4, "name": "Barış", "age": "22", "salary": 350 },
    //    { id: 5, "name": "Sevgi", "age": "45", "salary": 500 },
    //    { id: 6, "name": "Ahmet", "age": "54", "salary": 450 },
    //];

    //$scope.employees = [];

    //$scope.filterData = function (value) {
    //    $scope.employees = $scope.personal.filter(function (data) {

    //        switch ($scope.value) {
    //            case 1: $scope.value = 1
    //                return data.salary < 200;
    //            case 2: $scope.value = 2
    //                return data.salary < 250;
    //            case 3: $scope.value = 3
    //                return data.salary < 300;
    //            case 4: $scope.value = 4
    //                return data.salary < 350;
    //            case 5: $scope.value = 5
    //                return data.salary < 400;
    //            case 6: $scope.value = 6
    //                return data.salary > 450;
    //            default:
    //                break;
    //        }

    //    });
    //};

    //****Filtre ın devamı *************************************************
    //$scope.items = [];
    //$scope.employees = [
    //    { id: 1, "name": "Hasan", "age": "28", "salary": 200, "status": false },
    //    { id: 2, "name": "Murat", "age": "33", "salary": 300, "status": false },
    //    { id: 3, "name": "Mahmut","age": "19", "salary": 150, "status": false },
    //    { id: 4, "name": "Barış", "age": "22", "salary": 350, "status": false },
    //    { id: 5, "name": "Sevgi", "age": "45", "salary": 500, "status": false },
    //    { id: 6, "name": "Ahmet", "age": "54", "salary": 450, "status": false },
    //];

    //$scope.selectAll = function () {

    //    $scope.totalData = $scope.employees.length;
    //    for (i = 0; i < $scope.totalData; i++) {
    //        $scope.employees[i].status = true;
    //    }
    //};

    //$scope.unSelectAll = function () {
    //    $scope.totalData = $scope.employees.length;

    //    for (i = 0; i < $scope.totalData; i++) {
    //        $scope.employees[i].status = false;
    //    }
    //};

    //$scope.changeState = function () {
    //    $scope.items = $scope.employees.filter(function (i) {
    //        return i.status == true;
    //    });

    //    $scope.employees = $scope.employees.filter(function (i) {
    //        return i.status == false;
    //    });

    //};

    //************ng-submit*****************************************

    //$scope.sendMessage = function () {
    //    $scope.data = { "rakam": $scope.nnumara, "mail": $scope.mail };
    //    $http.post("htpp://denemeServis/", $scope.data).then(function (response) {
    //        $scope.cevap = response.data;
    //        alert("Mesajınız Gönderildi");
    //    });
    //};

    //**********ng-disabled****************************************
    //$scope.btn == true;

    //$scope.addText = function (value) {
    //    alert(value);
    //};

    //**********ng-hide********************************************

    //$scope.value = true;

    //$scope.hideOrShow = function () {
    //    $scope.value = !$scope.value;
    //};


    //********ng-keyup ,Animation************************************
    //$scope.items = ["Hasan", "Mahmut", "Barış", "Murat", "Cemal"];
    //$scope.action = function () {
    //    $scope.items.push($scope.box);
    //    $scope.box = "";
    //}

    //$scope.delete = function (a) {
    //    $scope.items.splice(a,1);
    //}


    //*****************ng-option*******************
    //$scope.iller = ["İstanbul", "Ankara", "Antalya", "Adana", "İzmir", "Mersin"];
    //$scope.iller.unshift('Bir il seçiniz');
    //$scope.control = $scope.iller[0];

    //$scope.action = function (a) {
    //    //alert(a);
    //}

    //**************$rootScope******************
    //$rootScope.value="Bu değer controller 1 in içeriğidir."


    //************** $digest ***************
    //document.getElementById("btn").addEventListener("click", function () {

    //    $scope.value = Math.random();

    //    console.log($scope.value);
    //    $scope.$digest();

    //});


    // ********** $compile ****************
    //angular.element(myDiv).append($compile('<input type="text" placeholder="Veri Giriniz" ng-model="esya"/>')($scope));
    //angular.element(myDiv).append($compile('<button ng-click="eylem(esya)">Tıkla</button>')($scope));

    //$scope.eylem = function (a) {
    //    alert(a);
    //}


    //*************** EMPLOYEE FORM ***********

    var val = this;
    val.employee = [
        { "name": "Hasan", "surname": "Mirzaoğlu", "email": "hasan@gmail.com" },
        { "name": "Leyla", "surname": "Cakıcı", "email": "leyla@gmail.com" }];

    val.addNew = addNew;
    val.update = update;
    val.deleteRow = deleteRow;
    val.selectRow = selectRow;
    val.addNewFriend = addNewFriend;
    val.cancelForm = cancelForm;
    val.clearText = clearText;



    $scope.value = "";
    //$scope.employee = [
    //    { "name": "Hasan", "surname": "Mirzaoğlu", "email": "hasan@gmail.com" },
    //    { "name": "Leyla", "surname": "Cakıcı", "email": "leyla@gmail.com" }];


    function addNewFriend() {
        $("#employeePopup").modal("show");
    };

    function addNew() {
        addNewFriend();
        $scope.employee.push({ "name": $scope.e_name, "surname": $scope.e_surname, "email": $scope.e_email });
        clearText();
    };

    function update() {
        addNewFriend();
        $scope.employee.splice($scope.value, 1, { "name": $scope.e_name, "surname": $scope.e_surname, "email": $scope.e_email });
        clearText();
    };


    function selectRow(a) {
        addNewFriend();
        $scope.e_name = $scope.employee[a].name;
        $scope.e_surname = $scope.employee[a].surname;
        $scope.e_email = $scope.employee[a].email;
        $scope.value = a;
    };

    function deleteRow(x) {
        $scope.employee.splice(x, 1);
        clearText();
    };

    function cancelForm() {
        $("#employeePopup").modal("hide");
    };

    function clearText() {
        $scope.e_name = "";
        $scope.e_surname = "";
        $scope.e_email = "";
        val.employee = $scope.employee;
    };


};