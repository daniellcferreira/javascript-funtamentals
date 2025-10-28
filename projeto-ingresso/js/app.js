function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipo == "pista") {
    comprarPista(qtd);
  }

}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

  if (qtd > qtdPista) {
    alert("Quantidade indisponível para o tipo Pista.");
  } else {
    qtdPista -= qtd;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso!");   
  }
}