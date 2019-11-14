angular.module('aplicacao').controller('DecimoTerceiroController', function($scope, $filter) {
    $scope.datas = [
      {
        "data_lancamento" : '01/01/2019'
      },
      {
        "data_lancamento" : '03/01/2019'
      },
      {
        "data_lancamento" : '02/01/2019'
      },
      {
        "data_lancamento" : '01/02/2019'
      },
    ]

    $scope.newarray = Object.keys($scope.datas)
        .map(function (value, index) {
            return { newdate: new Date(value), values: $scope.datas[value] }
        }
    );
})