const nome = 'rebeca'
const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressoes...

console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()

console.log(`ei... ${up('cuidado')}`)