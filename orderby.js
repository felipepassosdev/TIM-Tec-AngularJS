angular.module('aplicacao').controller('orderby', function ($scope, $filter) {
    $scope.alunos = [
        {
            'nome': 'Queijo',
            'idade': 22
        },
        {
            'nome': 'Gordo',
            'idade': 23
        }
    ] 

    $scope.ordenarPorNome = function(){
        $scope.ordenadoPorNome = !$scope.ordenadoPorNome;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenadoPorNome)
    }

    $scope.ordenarPorIdade = function(){
        $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade; // Chaviar true ou flase 
        $scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenadoPorIdade)
    }

   
})