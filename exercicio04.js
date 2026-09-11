import leia from "readline-sync";

const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
        ano: 1997,
        emprestado: false
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        ano: 1937,
        emprestado: true
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899,
        emprestado: false
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949,
        emprestado: false
    }
];

let opcao;

do {
    console.log("\n--- BIBLIOTECA ---");
    console.log("1 - Listar livros");
    console.log("2 - Mostrar livros disponíveis");
    console.log("3 - Emprestar livro");
    console.log("4 - Devolver livro");
    console.log("5 - Mostrar livro mais antigo");
    console.log("6 - Mostrar livro mais recente");
    console.log("7 - Buscar livros por autor");
    console.log("0 - Encerrar");

    opcao = leia.questionInt("Escolha uma opcao: ");

    // 1 - Listar livros
    if (opcao === 1) {

        livros.forEach(livro => {
            console.log(
                `${livro.titulo} - ${livro.autor} - ${livro.ano} - ${
                    livro.emprestado ? "Emprestado" : "Disponivel"
                }`
            );
        });

    // 2 - Mostrar disponíveis
    } else if (opcao === 2) {

        const disponiveis = livros.filter(livro => !livro.emprestado);

        disponiveis.forEach(livro => {
            console.log(`${livro.titulo} - ${livro.autor}`);
        });

    // 3 - Emprestar
    } else if (opcao === 3) {

        const titulo = leia.question("Digite o titulo do livro: ");

        let encontrado = false;

        for (let livro of livros) {

            if (livro.titulo.toLowerCase() === titulo.toLowerCase()) {

                encontrado = true;

                if (livro.emprestado) {
                    console.log("Esse livro ja esta emprestado.");
                } else {
                    livro.emprestado = true;
                    console.log("Livro emprestado com sucesso.");
                }

                break;
            }
        }

        if (!encontrado) {
            console.log("Livro nao encontrado.");
        }

    // 4 - Devolver
    } else if (opcao === 4) {

        const titulo = leia.question("Digite o titulo do livro: ");

        let encontrado = false;

        for (let livro of livros) {

            if (livro.titulo.toLowerCase() === titulo.toLowerCase()) {

                encontrado = true;

                if (!livro.emprestado) {
                    console.log("Esse livro ja esta disponivel.");
                } else {
                    livro.emprestado = false;
                    console.log("Livro devolvido com sucesso.");
                }

                break;
            }
        }

        if (!encontrado) {
            console.log("Livro nao encontrado.");
        }

 
    } else if (opcao === 5) {

        let maisAntigo = livros[0];

        for (let livro of livros) {

            if (livro.ano < maisAntigo.ano) {
                maisAntigo = livro;
            }
        }

        console.log(
            `Livro mais antigo: ${maisAntigo.titulo} (${maisAntigo.ano})`
        );

    } else if (opcao === 6) {

        let maisRecente = livros[0];

        for (let livro of livros) {

            if (livro.ano > maisRecente.ano) {
                maisRecente = livro;
            }
        }

        console.log(
            `Livro mais recente: ${maisRecente.titulo} (${maisRecente.ano})`
        );


    } else if (opcao === 7) {

        const autor = leia.question("Digite o autor: ");

        const encontrados = livros.filter(
            livro => livro.autor.toLowerCase() === autor.toLowerCase()
        );

        if (encontrados.length === 0) {
            console.log("Nenhum livro encontrado.");
        } else {
            encontrados.forEach(livro => {
                console.log(`${livro.titulo} - ${livro.ano}`);
            });
        }

    } else if (opcao === 0) {

        console.log("Programa encerrado.");

    } else {

        console.log("Opcao invalida.");
    }

} while (opcao !== 0);