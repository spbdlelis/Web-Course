const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(chave,':', valor)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Listável
    writable: false, // Modificável
    value: '01/01/2019' //valor
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = 0 // Não altera
console.log(pessoa)

// Object.assign (ES6)

const dest = {a: 1}
const o1 = {b: 1}
const o2 = {c: 1, a: 3}
const obj = Object.assign(dest, o1, o2) // Algo como concatenar objetos
//Caso hajam chaves iguais o valor é sobrescrito no objeto de destino

console.log(obj)
Object.freeze(obj.a) // Não funciona
obj.a = 5
obj.b = 5
console.log(obj)