function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];

  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;

  alert(`O produto ${nomeProduto} com valor unitário de R$${valorUnitario} adicionado com sucesso! O preço total é R$${preco.toFixed(2)}.`);

  


}