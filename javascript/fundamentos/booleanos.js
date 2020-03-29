let isActive = false

console.log(isActive)

isActive = true

console.log(isActive)

isActive = 1

console.log(!!isActive)

isActive = 0

console.log(!!isActive)
console.log('----------------------------------')
console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'abc ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true)) //o valor atribuído é verdadeiro

console.log('----------------------------------')
console.log('os falsos:')
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false)) //o valor atribuído é falso

console.log('----------------------------------')
console.log(('' || 0 || null || NaN || 'epa' || 123)) // retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Nome não definido') //valor padrão
nome = 'Lucas'
console.log(nome || 'Nome não definido') //valor padrão
