const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') // Compartilham o objeto

const contadorC = require('./instanciaNova')() // função construtora
const contadorD = require('./instanciaNova')() // Não compartilham o objeto

contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()

console.log(contadorD.valor)

