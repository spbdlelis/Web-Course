//Object.preventExtensions     Não permite adicionar atributos ao objeto

const Produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível', Object.isExtensible(Produto))

Produto.nome = 'Borracha'
Produto.descricao = 'borrachaaqfejmq'
delete Produto.tag

console.log(Produto)

//Object.seal    Não permite adicionar nem remover atributos
const pessoa = Object.seal({
    nome: 'Samuel', idade: 23
})

//Object.freeze     Não permite adicionar, remover nem alterar atributos