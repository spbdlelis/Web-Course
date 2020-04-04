//Factory simples

function criarPessoa () {
    return { // Criar pela notação literal sempre cria uma nova instância
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())