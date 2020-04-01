console.log('1 -> ', '1' == 1)
console.log('2 -> ', '1' === 1) //Estritamente igual, valor e tipo
console.log('3 -> ', '3' != 3)
console.log('4 -> ', '3' !== 3) //Estritamente diferente
console.log('5 -> ', '3' < 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('6 ->', d1 == d2) //Endereços de memória diferentes
console.log('7 ->', d1 === d2)//Endereços de memória diferentes

console.log('8 ->', d1.getTime() === d2.getTime())

console.log('9 ->', undefined == null)
console.log('10 ->', undefined === null)