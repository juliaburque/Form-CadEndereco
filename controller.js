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