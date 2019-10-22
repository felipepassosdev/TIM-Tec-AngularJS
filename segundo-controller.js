angular.module('aplicacao').controller('SegundoController', function($scope){
    data = new Date();
    $scope.hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
})