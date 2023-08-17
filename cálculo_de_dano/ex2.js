const card1 = prompt("Qual o nome do card atacante? ");
const atk = parseFloat(prompt("Qual o valor de ataque deste card? "));

const card2 = prompt("Qual o nome do card defensor? ");
let life = parseFloat(prompt("Quantos pontos de vida este card possui? "));
const def = parseFloat(prompt("Qual o  valor de defesa deste card? "));
const shield = prompt("Este card possui escudo? (Sim/Não)");

let danoCausado = 0;

if (atk > def && shield === "Não") {
  danoCausado = atk - def;
} else if (atk > def && shield === "Sim") {
  danoCausado = (atk - def) / 2;
}

life -= danoCausado;

alert(card1 + " causou " + danoCausado + " pontos de dano ao " + card2);

alert(
  card1 +
    "\nPontos de ataque: " +
    atk +
    "\n\n" +
    card2 +
    "\nPontos de vida: " +
    life +
    "\nPontos de defesa: " +
    def +
    "\nPossui escudo? " +
    shield
);
