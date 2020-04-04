function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 1500,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 50000,
    desc: 0.2
}

console.log(getPreco.call(carro, 0.17, '$')) //contexto e em seguida os parametros
console.log(getPreco.apply(carro, [0.1, '$'])) // contexto e em seguida os parâmetros em um array