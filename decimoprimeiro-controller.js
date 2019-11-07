angular.module('aplicacao').controller('DecimoPrimeiroController', function($scope){
    $scope.exps = [
        {
            "sys_id_item": "a89ab8dadb98c0105d8bad24149619dc",
            "number_item": "R0289135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "WENDYS 1542",
            "id_preview_expense": "34b41aa8db14cc145d8bad2414961970",
            "valor": " 48.92 ",
            "processo": "corporation_card",
            "picker": "9e99785adb98c0105d8bad241496194e",
            "cod_funcionario": "72cb8bd2dbf4330081cea7b214961976",
            "pessoal": "",
            "mcc": "5814",
            "fatura": "10/1/19",
            "banco": "Bradesco",
            "data_carga": "",
            "id_despesa": "6512366088396",
            "nome_portados": "ANDRE DE OLIVEIRA BOTELHO",
            "status": "3",
            "name": "Andre De Oliveira Botelho",
            "company": "Ambev S.A.",
            "location": "AC",
            "cc": "BRZA120264",
            "ccontabil": "6103002 - Despesas com Alimentação",
            "cod_sap": "90091821",
            "id": "99804437",
            "num_card": ""
        },
        {
            "sys_id_item": "fc9af8dadb98c0105d8bad241496190b",
            "number_item": "R0289137",
            "data_lancamento": "23/08/2019",
            "descricao_despesa": "PIKE BREWING PUB",
            "id_preview_expense": "f4b41aa8db14cc145d8bad2414961997",
            "valor": " 146.72 ",
            "processo": "corporation_card",
            "picker": "982abc9adb98c0105d8bad2414961949",
            "cod_funcionario": "72cb8bd2dbf4330081cea7b214961976",
            "pessoal": "",
            "mcc": "5813",
            "fatura": "10/1/19",
            "banco": "Bradesco",
            "data_carga": "",
            "id_despesa": "6113346088401",
            "nome_portados": "ANDRE DE OLIVEIRA BOTELHO",
            "status": "3",
            "name": "Andre De Oliveira Botelho",
            "company": "Ambev S.A.",
            "location": "AC",
            "cc": "BRZA120264",
            "ccontabil": "6103002 - Despesas com Alimentação",
            "cod_sap": "90091821",
            "id": "99804437",
            "num_card": ""
        },
        {
            "sys_id_item": "fc9af8dadb98c0105d8bad241496190b",
            "number_item": "R0289137",
            "data_lancamento": "23/08/2019",
            "descricao_despesa": "PIKE BREWING PUB",
            "id_preview_expense": "f4b41aa8db14cc145d8bad2414961997",
            "valor": " 146.72 ",
            "processo": "corporation_card",
            "picker": "982abc9adb98c0105d8bad2414961949",
            "cod_funcionario": "72cb8bd2dbf4330081cea7b214961976",
            "pessoal": "",
            "mcc": "5813",
            "fatura": "10/1/19",
            "banco": "Bradesco",
            "data_carga": "",
            "id_despesa": "6113346088401",
            "nome_portados": "ANDRE DE OLIVEIRA BOTELHO",
            "status": "3",
            "name": "Andre De Oliveira Botelho",
            "company": "Ambev S.A.",
            "location": "AC",
            "cc": "BRZA120264",
            "ccontabil": "6103002 - Despesas com Alimentação",
            "cod_sap": "90091821",
            "id": "99804437",
            "num_card": ""
        },
        {
            "sys_id_item": "fc9af8dadb98c0105d8bad241496190b",
            "number_item": "R0289137",
            "data_lancamento": "23/08/2019",
            "descricao_despesa": "PIKE BREWING PUB",
            "id_preview_expense": "f4b41aa8db14cc145d8bad2414961997",
            "valor": " 146.72 ",
            "processo": "corporation_card",
            "picker": "982abc9adb98c0105d8bad2414961949",
            "cod_funcionario": "72cb8bd2dbf4330081cea7b214961976",
            "pessoal": "",
            "mcc": "5813",
            "fatura": "10/1/19",
            "banco": "Bradesco",
            "data_carga": "",
            "id_despesa": "6113346088401",
            "nome_portados": "ANDRE DE OLIVEIRA BOTELHO",
            "status": "3",
            "name": "Andre De Oliveira Botelho",
            "company": "Ambev S.A.",
            "location": "AC",
            "cc": "BRZA120264",
            "ccontabil": "6103002 - Despesas com Alimentação",
            "cod_sap": "90091821",
            "id": "99804437",
            "num_card": ""
        }
    ]

    $scope.ConvertPessoal = function(e) {
        if(e == 'true'){
            return 'Pessoal'
        }
        else {
            return 'Empresarial'
        }
    }

    $scope.ConvertStatus = function(e){
        if (e == '3') {
            return 'Aprovado'
        }
        else if (e == '4') {
            return 'Reprovado'
        }
    }
})