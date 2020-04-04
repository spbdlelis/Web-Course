function criarProduto (nome = '', preco = 0) {
    return {
        nome: nome,
        preco, // subentende-se que o nome do atributo é o mesmo nome da variavel representante do valor
        desconto: 0.7 
    }
}

console.log(criarProduto())
console.log(criarProduto('notebook', 2199.90))