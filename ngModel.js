angular.module('aplicacao').controller('ngModel', function ($scope) {
   
    $scope.guardar = []

   $scope.enviar = function(){
    $scope.guardar.push($scope.email)
    $scope.guardar.push($scope.senha)
    console.log($scope.guardar)
   }
})