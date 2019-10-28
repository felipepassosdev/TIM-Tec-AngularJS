angular.module('aplicacao').controller('OitavoController', function($scope){
    $scope.iniciado = true;

    $scope.mudar = function(){
        $scope.iniciado = false;
    }
})