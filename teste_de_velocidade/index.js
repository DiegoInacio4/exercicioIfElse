const veiculo1 = prompt("Insira o nome do primeiro veículo: ");
const velocidade1 = parseFloat(
  prompt("Insira a velocidade do primeiro veículo: ")
);
const veiculo2 = prompt("Insira o nome do segundo veículo: ");
const velocidade2 = parseFloat(
  prompt("Insira a velocidade do segundo veículo: ")
);

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1);
} else {
  alert(veiculo1 + " tem a mesma velocidade que " + veiculo2);
}
