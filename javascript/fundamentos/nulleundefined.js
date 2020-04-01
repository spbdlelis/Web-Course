const a = {name: 'Teste'} // a armazena o endereço (ponteiro)

console.log(a)

const b = a 

b.name = 'opa' //mudança por referência

console.log(a)

let c = 3

let d = c

d++

console.log(c)

let valor

console.log(valor)

valor = null // ausência de referência
// undefined é ausência de valor

console.log(valor)
//console.log(valor.toString()) // Erro!!

const produto = {}

console.log(produto.preco) // Undefined
//não dá erro pois produto está definido, mesmo sua propriedade preco não estando

produto.preco = 3.50

console.log(produto)

produto.preco = undefined

console.log(produto.preco)

console.log(produto)

delete produto.preco

produto.preco = null

console.log(produto) 