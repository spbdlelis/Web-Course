console.log('a =', a)
var a = 2
console.log('a =', a)

//Se a não for declarado irá dar erro
//mas caso seja declarado, ocorrerá o hoisting,
//resultando como indefinido, pois a variável a
//existe mas naquele momento ainda não foi definida

console.log(b)
let b = 2
console.log(b)

//para let não existe hoisting pois let nao gera escopo global

function teste0(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

//O mesmo vale para funções

teste()