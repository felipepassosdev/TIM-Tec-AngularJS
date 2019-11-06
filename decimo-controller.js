angular.module('aplicacao').controller('DecimoController', function($scope){
    $scope.usuarios = []

    $scope.submeterLogin = function() {
        $scope.usuarios.push($scope.email)
    }
})