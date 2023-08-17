const personagem1 = prompt("Insira o nome do personagem que está atacando: ");
const atk = parseFloat(prompt("Qual o poder de ataque deste personagem? "));

const personagem2 = prompt("Insira o nome do personagem que vai defender: ");
let life = parseFloat(prompt("Qual a quantidade de vida deste personagem? "));
const def = parseFloat(prompt("Qual o  valor de defesa deste personagem? "));
const shield = prompt("Este personagem possui escudo? (Sim ou Não)");

let danoCausado = 0;

if (atk > def && shield === "Não") {
  danoCausado = atk - def;
} else if (atk > def && shield === "Sim") {
  danoCausado = (atk - def) / 2;
} else {
  danoCausado = 0;
}

life -= danoCausado;

alert(
  personagem1 + " causou " + danoCausado + " pontos de dano ao " + personagem2
);
alert(
  personagem1 +
    "\nPoder de ataque: " +
    atk +
    "\n\n" +
    personagem2 +
    "\nPontos de vida: " +
    life +
    "\nPoder de defesa: " +
    def +
    "\nPossui escudo? " +
    shield
);
