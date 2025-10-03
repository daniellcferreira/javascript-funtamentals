// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Digite um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(numeroSecreto == chute);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}