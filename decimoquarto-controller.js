angular.module('aplicacao').controller('DecimoQuartoController', function($scope){
     // CREATE AN 'employees' OBJECT, WITH AN ARRAY OF DATA.
     $scope.employees = {
        "05/17/2015": { 'name': 'Alpha', 'age': 37 },
        "03/25/2016": { 'name': 'Bravo', 'age': 27 },
        "09/11/2015": { 'name': 'Charlie', 'age': 29 },
        "01/07/2016": { 'name': 'Delta', 'age': 19 },
        "03/09/2014": { 'name': 'Echo', 'age': 32 }
    }

    $scope.empArray = Object.keys($scope.employees)
        .map(function (value, index) {
            return { joinDate: new Date(value), values: $scope.employees[value] }
        }
    );
})