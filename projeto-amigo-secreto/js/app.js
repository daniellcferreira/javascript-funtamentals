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
  embaralhar(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralhar(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[i - 1],
    ];
  }
}
