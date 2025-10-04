// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tantativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTexto('h1', 'Jogo do número secreto');
  exibirTexto('p', 'Digite um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirTexto('h1', 'Você acertou!');
    let palavraTentativas = tantativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns! você acertou o número secreto em ${tantativas} ${palavraTentativas}!`;
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTexto('p', 'O número secreto é menor');
    } else {
      exibirTexto('p', 'O número secreto é maior');
    }
    tantativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tantativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}