// 2) Crie um vetor contendo objetos representando passageiros de um ônibus. Cada
// passageiro deverá possuir: nome, idade, destino, pagouPassagem.
// Percorra o vetor e apresente:
// Quantidade de passageiros.
// Quantidade de passageiros menores de idade.
// Quantidade de passageiros com 60 anos ou mais.
// Quantidade de passageiros que ainda não pagaram a passagem.
// Média de idade dos passageiros.
// Depois, peça ao usuário um destino e mostre todos os passageiros que irão para esse
// destino.
import leia from 'readline-sync'
const passageiros = [
    {
        nome: "Carlos",
        idade: 25,
        destino: "São Paulo",
        pagouPassagem: true
    },
    {
        nome: "Maria",
        idade: 32,
        destino: "Curitiba",
        pagouPassagem: true
    },
    {
        nome: "João",
        idade: 17,
        destino: "Florianópolis",
        pagouPassagem: false
    }
];
var menores = 0
var idosos = 0 
var npago = 0
var somaida= 0
passageiros.forEach(function(passageiro){
    if (passageiro.idade < 18){
        menores++
    }
    if(passageiro.idade >= 60 ){
        idosos++
    }
    if (passageiro.pagouPassagem == false){
        npago++
    }
    somaida = somaida + passageiro.idade
})
var mediai = somaida / passageiros.length



console.log(`quantidade de passageiros : ${passageiros.length}`)
console.log(somaida + " idade dos caba la")
console.log(`a media de idade dos passageiros é ${mediai.toFixed(2)}`)
