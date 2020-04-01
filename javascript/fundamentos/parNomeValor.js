//par chave/valor

const saudacao = 'Ola' //Contexto Léxico 1

function exec() {
    const saudacao = 'Opa' //contexto Léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares chave/valor
const Cliente = { // escopo 0
    nome: 'Pedro', // escopoo 1
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua 1', //Escopo 2
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

