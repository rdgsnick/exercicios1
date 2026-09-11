import leia from "readline-sync";

const passageiros = [
    {
        nome: "Carlos",
        idade: 25,
        destino: "Florianopolis",
        pagouPassagem: true
    },
    {
        nome: "Maria",
        idade: 15,
        destino: "Tijucas",
        pagouPassagem: false
    },
    {
        nome: "Joao",
        idade: 67,
        destino: "Florianopolis",
        pagouPassagem: true
    },
    {
        nome: "Ana",
        idade: 45,
        destino: "Itapema",
        pagouPassagem: false
    },
    {
        nome: "Pedro",
        idade: 12,
        destino: "Tijucas",
        pagouPassagem: true
    }
];

let menores = 0;
let idosos = 0;
let naoPagaram = 0;
let somaIdades = 0;


passageiros.forEach(passageiro => {

    somaIdades += passageiro.idade;

    if (passageiro.idade < 18) {
        menores++;
    }

    if (passageiro.idade >= 60) {
        idosos++;
    }

    if (passageiro.pagouPassagem === false) {
        naoPagaram++;
    }
});

const mediaIdade = somaIdades / passageiros.length;

console.log(`Quantidade de passageiros: ${passageiros.length}`);
console.log(`Menores de idade: ${menores}`);
console.log(`Pessoas com 60 anos ou mais: ${idosos}`);
console.log(`Nao pagaram a passagem: ${naoPagaram}`);
console.log(`Media de idade: ${mediaIdade.toFixed(2)}`);

const destino = leia.question("Digite um destino: ");

const passageirosDestino = passageiros.filter(
    passageiro => passageiro.destino.toLowerCase() === destino.toLowerCase()
);

console.log(`\nPassageiros que vao para ${destino}:`);

if (passageirosDestino.length === 0) {
    console.log("Nenhum passageiro encontrado.");
} else {
    passageirosDestino.forEach(passageiro => {
        console.log(passageiro.nome);
    });
}