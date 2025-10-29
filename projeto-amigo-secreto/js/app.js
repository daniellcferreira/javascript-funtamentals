let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");
  amigos.push(amigo.value);
  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent += `, ${amigo.value}`;
  }

  amigo.value = "";
}

function sortear() {
  embaralha(amigos);
}

function embaralha(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[i - 1],
    ];
  }
}
