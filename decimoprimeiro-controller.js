angular.module('aplicacao').controller('DecimoPrimeiroController', function($scope){
    $scope.exps = [
        {
            "sys_id_item": "asdfsdf98c0105d8badsfsdfd24149619dc",
            "number_item": "R02dsfsd89135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "ITAU",
            "id_preview_expense": "DS4b41SADASaa8db14cc145d8bad2SDSD61970",
            "valor": " 4800.92 ",
            "processo": "corporation_card",
            "picker": "9ASDSe99785aASDASDdb98c0105d8bad241496194e",
            "cod_funcionario": "72cASDb8bASDAd2dbf4330081cASDASDea7b214961976",
            "pessoal": "",
            "mcc": "584514",
            "fatura": "10/1/19",
            "banco": "itau",
            "data_carga": "",
            "id_despesa": "6sads51df66dfdf088396",
            "nome_portados": "Felipe Passos",
            "status": "3",
            "name": "Felipe Passos",
            "company": "Deew Labs",
            "location": "CGT",
            "cc": "BsfsdfRZA12fd0264",
            "ccontabil": "SDFSDF345 - Despesas com Alimentação",
            "cod_sap": "12391821",
            "id": "A380FDF4437",
            "num_card": ""
        },
        {
            "sys_id_item": "asdfsdf98c0105d8badsfsdfd24149619dc",
            "number_item": "R02dsfsd89135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "ITAU",
            "id_preview_expense": "DS4b41SADASaa8db14cc145d8bad2SDSD61970",
            "valor": " 4800.92 ",
            "processo": "corporation_card",
            "picker": "9ASDSe99785aASDASDdb98c0105d8bad241496194e",
            "cod_funcionario": "72cASDb8bASDAd2dbf4330081cASDASDea7b214961976",
            "pessoal": "",
            "mcc": "584514",
            "fatura": "10/1/19",
            "banco": "itau",
            "data_carga": "",
            "id_despesa": "6sads51df66dfdf088396",
            "nome_portados": "Felipe Passos",
            "status": "3",
            "name": "Felipe Passos",
            "company": "Deew Labs",
            "location": "CGT",
            "cc": "BsfsdfRZA12fd0264",
            "ccontabil": "SDFSDF345 - Despesas com Alimentação",
            "cod_sap": "12391821",
            "id": "A380FDF4437",
            "num_card": ""
        },
        {
            "sys_id_item": "asdfsdf98c0105d8badsfsdfd24149619dc",
            "number_item": "R02dsfsd89135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "ITAU",
            "id_preview_expense": "DS4b41SADASaa8db14cc145d8bad2SDSD61970",
            "valor": " 4800.92 ",
            "processo": "corporation_card",
            "picker": "9ASDSe99785aASDASDdb98c0105d8bad241496194e",
            "cod_funcionario": "72cASDb8bASDAd2dbf4330081cASDASDea7b214961976",
            "pessoal": "",
            "mcc": "584514",
            "fatura": "10/1/19",
            "banco": "itau",
            "data_carga": "",
            "id_despesa": "6sads51df66dfdf088396",
            "nome_portados": "Felipe Passos",
            "status": "3",
            "name": "Felipe Passos",
            "company": "Deew Labs",
            "location": "CGT",
            "cc": "BsfsdfRZA12fd0264",
            "ccontabil": "SDFSDF345 - Despesas com Alimentação",
            "cod_sap": "12391821",
            "id": "A380FDF4437",
            "num_card": ""
        },
        {
            "sys_id_item": "asdfsdf98c0105d8badsfsdfd24149619dc",
            "number_item": "R02dsfsd89135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "ITAU",
            "id_preview_expense": "DS4b41SADASaa8db14cc145d8bad2SDSD61970",
            "valor": " 4800.92 ",
            "processo": "corporation_card",
            "picker": "9ASDSe99785aASDASDdb98c0105d8bad241496194e",
            "cod_funcionario": "72cASDb8bASDAd2dbf4330081cASDASDea7b214961976",
            "pessoal": "",
            "mcc": "584514",
            "fatura": "10/1/19",
            "banco": "itau",
            "data_carga": "",
            "id_despesa": "6sads51df66dfdf088396",
            "nome_portados": "Felipe Passos",
            "status": "3",
            "name": "Felipe Passos",
            "company": "Deew Labs",
            "location": "CGT",
            "cc": "BsfsdfRZA12fd0264",
            "ccontabil": "SDFSDF345 - Despesas com Alimentação",
            "cod_sap": "12391821",
            "id": "A380FDF4437",
            "num_card": ""
        },
        {
            "sys_id_item": "asdfsdf98c0105d8badsfsdfd24149619dc",
            "number_item": "R02dsfsd89135",
            "data_lancamento": "20/08/2019",
            "descricao_despesa": "ITAU",
            "id_preview_expense": "DS4b41SADASaa8db14cc145d8bad2SDSD61970",
            "valor": " 4800.92 ",
            "processo": "corporation_card",
            "picker": "9ASDSe99785aASDASDdb98c0105d8bad241496194e",
            "cod_funcionario": "72cASDb8bASDAd2dbf4330081cASDASDea7b214961976",
            "pessoal": "",
            "mcc": "584514",
            "fatura": "10/1/19",
            "banco": "itau",
            "data_carga": "",
            "id_despesa": "6sads51df66dfdf088396",
            "nome_portados": "Felipe Passos",
            "status": "3",
            "name": "Felipe Passos",
            "company": "Deew Labs",
            "location": "CGT",
            "cc": "BsfsdfRZA12fd0264",
            "ccontabil": "SDFSDF345 - Despesas com Alimentação",
            "cod_sap": "12391821",
            "id": "A380FDF4437",
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