let valores = [7.7, 8.9, 6.3, 9.3]

console.log(valores[0], valores[3])
console.log(valores[5])

valores[4] = 5
valores[10] = 10

console.log(valores)

console.log(valores.length)

valores.push('abc')

console.log(valores, valores.length)

valores.pop()

console.log(valores, valores.length)

delete valores[0]
console.log(valores, valores.length)
console.log(valores[0])