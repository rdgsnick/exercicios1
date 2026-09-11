import leia from "readline-sync";

const assentos = [];

for (let i = 1; i <= 20; i++) {
    assentos.push({
        numero: i,
        ocupado: false,
        tipo: i <= 5 ? "preferencial" : "normal"
    });
}

let opcao;

do {
    console.log("\n--- CINEMA ---");
    console.log("1 - Listar assentos");
    console.log("2 - Ocupar assento");
    console.log("3 - Liberar assento");
    console.log("4 - Mostrar assentos disponíveis");
    console.log("0 - Sair");

    opcao = leia.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        assentos.forEach(assento => {
            console.log(
                `Assento ${assento.numero} - ${assento.tipo} - ${
                    assento.ocupado ? "Ocupado" : "Livre"
                }`
            );
        });

    } else if (opcao === 2) {

        const numero = leia.questionInt("Digite o numero do assento: ");

        const assento = assentos.find(assento => assento.numero === numero);

        if (!assento) {
            console.log("Assento nao encontrado.");
        } else if (assento.ocupado) {
            console.log("Esse assento ja esta ocupado.");
        } else {
            assento.ocupado = true;
            console.log(`Assento ${numero} ocupado com sucesso.`);
        }

    } else if (opcao === 3) {

        const numero = leia.questionInt("Digite o numero do assento: ");

        const assento = assentos.find(assento => assento.numero === numero);

        if (!assento) {
            console.log("Assento nao encontrado.");
        } else if (!assento.ocupado) {
            console.log("Esse assento ja esta livre.");
        } else {
            assento.ocupado = false;
            console.log(`Assento ${numero} liberado.`);
        }

    } else if (opcao === 4) {

        const disponiveis = assentos.filter(assento => !assento.ocupado);

        disponiveis.forEach(assento => {
            console.log(
                `Assento ${assento.numero} - ${assento.tipo}`
            );
        });

    } else if (opcao === 0) {
        console.log("Programa encerrado.");

    } else {
        console.log("Opcao invalida.");
    }

} while (opcao !== 0);