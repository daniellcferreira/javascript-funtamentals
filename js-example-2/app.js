let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tantativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
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
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeELementosLista = listaNumerosSorteados.length;

  if (quantidadeELementosLista == numeroLimite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
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