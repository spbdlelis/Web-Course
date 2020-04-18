const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

Array.prototype.map3 = callback => {
    const result = []
    for (let i in this){
        result.push(callback(this[i], i, this))  
    }
    console.log(result)
    return result
}

const meuarray = [1,2,3,4]

for(let i=0; i< carrinho.length; i++){
    console.log(i)
    console.log(carrinho[i])
}

for(let i in carrinho){
    console.log(i)
    console.log(carrinho[i])
}

for(let i in meuarray) {
    console.log(i)
    console.log(meuarray[i])
}