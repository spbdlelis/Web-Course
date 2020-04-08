// pessoa aponta para um local na memória
const pessoa = {nome: 'João'}

// O dado do objeto pode ser alterado, desde que a referência permaneça a mesma

Object.freeze(pessoa) // bloqueia qualquer alteração interna no objeto

pessoa.nome = 'Maria'
pessoa.end = 'rua 123'
delete pessoa.nome

console.log(pessoa.nome)

const pessoaConst = Object.freeze({nome: 'João'}) // Objeto totalmente imutável
