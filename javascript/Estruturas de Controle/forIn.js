const arr = [2,3,4,5,7,8,9,10]

for (let i in arr){ // percorre por índices e não valores
    console.log(i, arr[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 89
}

for(let attr in pessoa){
    console.log(`${attr}=${pessoa[attr]}`)
}

console.log('nome' in pessoa) // existe a propriedade no objeto