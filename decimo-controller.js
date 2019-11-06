angular.module('aplicacao').controller('DecimoController', function($scope){
    $scope.usuarios = []
    $scope.iniciado = true

    $scope.submeterLogin = function() {
        if($scope.form_login.$valid){
            $scope.usuarios.push($scope.email)
        }else {

        }
    }
})