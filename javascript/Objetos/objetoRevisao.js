const produto = new Object

produto.nome = 'Cadeira'

produto['marca'] = 'Generica'

produto.preco = 200
console.log(produto)

delete produto.preco


console.log(produto)

const carro = {
    modelo: 'corolla',
    valor: 90000,
    proprietario : {
        logradouro: 'Rua 1',
        numero: 123 
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 22
    }],
    calcularValSeguro: () => {
        //funcao
    }
}

console.log(carro)