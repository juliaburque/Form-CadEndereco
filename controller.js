'use strict'; // Modo restrito
//Consumindo API de CEP, do ViaCep
//https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa numero informado comexpressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); //verificar tamanho do cep digitado e executa função de validação do cep eNumero

//Função para preencher formuário
const preencherFormulario = (endereco) =>{
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
}

//Consumo da API da ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //aguardar
        const addres = await dados.json(); 
        //hasOwnProperty retorna um boleano indicado se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
        if(addres.hasOwnProperty('erro')){

        }  
      }
}
