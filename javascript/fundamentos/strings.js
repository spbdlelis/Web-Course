const escola = 'cod3rr'

console.log(escola.charAt(4))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(1)) // Tabela Ascii

console.log(escola.indexOf('t'))
console.log(escola.indexOf('c'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('escola '.concat(escola).concat('!'))

console.log(escola.replace(/\d/, 'e')) //Expressão regular para todos os dígitos
console.log(escola.replace(/\w/, 'e')) //Expressão regular para todas as letras
console.log(escola.replace(/\w/g, 'e')) //Expressão regular para todas as letras globalmente
console.log('Ana,Maria,Pedro'.split(','))

console.log(escola.replace('r','3'))



