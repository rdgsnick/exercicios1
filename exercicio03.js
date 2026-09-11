import leia from 'readline-sync';

var compromissos = [
    {
        descricao: "Fazer trabalho de JavaScript",
        dia: "segunda",
        horario: "19:00",
        concluido: false
    },
    {
        descricao: "Estudar para a prova",
        dia: "terca",
        horario: "20:00",
        concluido: false
    },
    {
        descricao: "Academia",
        dia: "quarta",
        horario: "18:00",
        concluido: true
    },
    {
        descricao: "Fazer atividade do SENAI",
        dia: "quinta",
        horario: "19:30",
        concluido: false
    },
    {
        descricao: "Reuniao do projeto",
        dia: "sexta",
        horario: "14:00",
        concluido: true
    },
    {
        descricao: "Estudar Node.js",
        dia: "segunda",
        horario: "21:00",
        concluido: false
    },
    {
        descricao: "Fazer exercicios",
        dia: "terca",
        horario: "18:30",
        concluido: true
    },
    {
        descricao: "Estudar automacao",
        dia: "quarta",
        horario: "20:00",
        concluido: false
    },
    {
        descricao: "Organizar projeto",
        dia: "quinta",
        horario: "16:00",
        concluido: true
    },
    {
        descricao: "Revisar conteudo",
        dia: "sexta",
        horario: "19:00",
        concluido: false
    }
];

var opcao;

do {
    console.log("\n=== MENU ===");
    console.log("1 - Listar todos os compromissos");
    console.log("2 - Listar compromissos pendentes");
    console.log("3 - Marca compromisso como concluído");
    console.log("4 - Mostrar compromissos de um determinado dia");
    console.log("5 - Mostrar quantidade de compromissos concluídos");
    console.log("6 - Mostrar quantidade de compromissos pendentes");
    console.log("0 - Sair");

    opcao = leia.questionInt("Escolha uma opcao: ");

    switch(opcao){
        case 1:
            console.log("\n=== Todos os compromissos")
            compromisso.forEach(function(compromisso){
                console.log("Descrição: " + compromisso.descricao +
                    " | Dia: " + compromisso.dia +
                    " | Horario: " + compromisso.horario +
                    " | Concluido: " + compromisso.concluido 
                );
            });
            break;
        case 2:
            console.log("\n=== Compromissos pendentes ===")
            compromissos.forEach(function(compromisso){
                if(compromisso.concluido == false){
                    console.log("Descrição: " + compromisso.descricao +
                        " | Dia: " + compromisso.dia + 
                        " | Horario: " + compromisso.horario
                    )
                }
            });
            break;
        case 3:
            var numero = leia.questionInt("\nDigite o numero do compromisso para concluir")
            if(numero >= 1 && numero <= compromissos.length){
                compromissos[numero - 1].concluido = true
                console.log("Compromisso concluido com sucesso")
            }else{
                console.log("Compromisso não encontrado")
            }
            break;
        case 4:
            var dia = leia.question("\nDigite o dia")
            console.log("\nCompromissos de " + dia + "===")
            var encontrou = false;
            compromissos.forEach(function(compromisso){
                if(compromisso.dia.toLocaleLowerCase() == dia.toLocaleLowerCase()){
                    console.log("Descricao: " + compromisso.descricao + 
                        " | Horario: " + compromisso.descricao + 
                        " | Concluido: " + compromisso.concluido
                    )
                }
                encontrou = true;
            });
            if(encontrou == false){
                console.log("Nenhum compromisso encontrado nesse dia");
            }
            break;
        case 5:
            var concluidos = 0
            compromissos.forEach(function(compromisso){
                if(compromisso.concluido == true){
                    concluidos++
                }
            });
            console.log("\nQuantidade de compromissos concluidos: " + concluidos);
            break;
        case 6:
            var pendentes = 0;
            compromissos.forEach(function(compromisso){
                if(compromisso.concluido == false){
                    pendentes++
                }
            });
            console.log("\nQuantidade de compromissos pendentes: " + pendentes);
            break;
        case 0:
            console.log("\nPrograma encerrado")
            break;
        default:
            console.log("\nOpcao invalida")
    }
}while(opcao != 0);