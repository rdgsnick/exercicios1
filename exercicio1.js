import leia from 'readline-sync'
let senha = Math.floor(Math.random()* 100 )+1
console.log(senha)
let pedirsenha 
let chance = 3
do{
pedirsenha = leia.questionInt(`qual a senha? voce tem ${chance} chances restantes `)
if(pedirsenha != senha){
    console.log('senha errada')
}
if (pedirsenha === senha){
    console.log('senha correta acesso liberado')
    break
}
if(chance == 0){
    break
}
chance--
}
while(pedirsenha == senha || chance !==0)