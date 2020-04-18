const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

// retornar um array com os precos

const getPreco = obj => obj.preco

console.log(carrinho.map(JSON.parse).map(getPreco))