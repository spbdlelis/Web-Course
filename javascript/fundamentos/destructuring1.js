const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //remova do objeto pessoa os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemhumorada = true} = pessoa // valor padrão
console.log(sobrenome, bemhumorada)

const {endereco: {logradouro, numero, cep}, nome:nn, idade: ii} = pessoa
console.log(logradouro, numero,  cep, nn, ii)