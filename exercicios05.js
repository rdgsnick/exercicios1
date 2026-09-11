import leia from "readline-sync";

const mesas = [
    {
        numero: 1,
        ocupada: false,
        pedidos: [],
        totalConta: 0
    },
    {
        numero: 2,
        ocupada: false,
        pedidos: [],
        totalConta: 0
    },
    {
        numero: 3,
        ocupada: false,
        pedidos: [],
        totalConta: 0
    },
    {
        numero: 4,
        ocupada: false,
        pedidos: [],
        totalConta: 0
    },
    {
        numero: 5,
        ocupada: false,
        pedidos: [],
        totalConta: 0
    }
];

let opcao;

do {
    console.log("\n--- RESTAURANTE ---");
    console.log("1 - Mostrar mesas");
    console.log("2 - Ocupar mesa");
    console.log("3 - Adicionar pedido");
    console.log("4 - Fechar conta");
    console.log("5 - Mostrar mesa com maior conta");
    console.log("6 - Mostrar faturamento atual");
    console.log("0 - Sair");

    opcao = leia.questionInt("Escolha uma opcao: ");

    // 1 - Mostrar mesas
    if (opcao === 1) {

        mesas.forEach(mesa => {
            console.log(
                `Mesa ${mesa.numero} - ${
                    mesa.ocupada ? "Ocupada" : "Livre"
                } - Conta: R$ ${mesa.totalConta.toFixed(2)}`
            );
        });


    } else if (opcao === 2) {

        const numero = leia.questionInt("Digite o numero da mesa: ");

        const mesa = mesas.find(mesa => mesa.numero === numero);

        if (!mesa) {
            console.log("Mesa nao encontrada.");
        } else if (mesa.ocupada) {
            console.log("Essa mesa ja esta ocupada.");
        } else {
            mesa.ocupada = true;
            console.log("Mesa ocupada com sucesso.");
        }

   
    } else if (opcao === 3) {

        const numero = leia.questionInt("Digite o numero da mesa: ");

        const mesa = mesas.find(mesa => mesa.numero === numero);

        if (!mesa) {
            console.log("Mesa nao encontrada.");

        } else if (!mesa.ocupada) {
            console.log("Essa mesa esta livre. Ocupe a mesa primeiro.");

        } else {

            const nomeItem = leia.question("Nome do item: ");
            const valor = leia.questionFloat("Valor do item: ");

            const pedido = {
                nome: nomeItem,
                valor: valor
            };

            mesa.pedidos.push(pedido);

            mesa.totalConta += valor;

            console.log("Pedido adicionado com sucesso.");
        }

    
    } else if (opcao === 4) {

        const numero = leia.questionInt("Digite o numero da mesa: ");

        const mesa = mesas.find(mesa => mesa.numero === numero);

        if (!mesa) {
            console.log("Mesa nao encontrada.");

        } else if (!mesa.ocupada) {
            console.log("Essa mesa esta livre.");

        } else {

            console.log(`\n--- CONTA DA MESA ${mesa.numero} ---`);

            mesa.pedidos.forEach(pedido => {
                console.log(
                    `${pedido.nome} - R$ ${pedido.valor.toFixed(2)}`
                );
            });

            console.log(`Total: R$ ${mesa.totalConta.toFixed(2)}`);

            mesa.ocupada = false;
            mesa.pedidos = [];
            mesa.totalConta = 0;

            console.log("Mesa liberada.");
        }

   
    } else if (opcao === 5) {

        let maiorConta = mesas[0];

        for (let mesa of mesas) {
            if (mesa.totalConta > maiorConta.totalConta) {
                maiorConta = mesa;
            }
        }

        console.log(
            `Mesa com maior conta: Mesa ${maiorConta.numero}`
        );

        console.log(
            `Valor: R$ ${maiorConta.totalConta.toFixed(2)}`
        );

   
    } else if (opcao === 6) {

        let faturamento = 0;

        mesas.forEach(mesa => {
            faturamento += mesa.totalConta;
        });

        console.log(
            `Faturamento atual: R$ ${faturamento.toFixed(2)}`
        );

    } else if (opcao === 0) {

        console.log("Programa encerrado.");

    } else {

        console.log("Opcao invalida.");
    }

} while (opcao !== 0);

