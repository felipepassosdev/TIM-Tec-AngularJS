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

    $scope.submeterLogin = function() {
        if($scope.form_1.$valid){
            novo_aluno = {}
            novo_aluno['nome'] = $scope.nome_aluno
            novo_aluno['idade'] = parseInt($scope.idade_aluno)
            $scope.usuarios.push(novo_aluno)
        }else {
            alert('NÃO VALIDO')
        }
    }
})