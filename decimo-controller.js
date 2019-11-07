angular.module('aplicacao').controller('DecimoController', function($scope){
    $scope.usuarios = []
    $scope.iniciado = true
    $scope.valido = false
    $scope.hide = true
    $scope.show = false
    $scope.mensagem = 'As informações não estão corretas'

    $scope.submeterLogin = function() {
        if($scope.form_login.$valid){
            $scope.usuarios.push($scope.email)
        }else {
            alert('NÃO VALIDO')
            $scope.valido = true
        }
    }
})