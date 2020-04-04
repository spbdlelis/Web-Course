let comparaComThis = function (param) { // na função comum o this é o global
    console.log(this === param) 
}

comparaComThis(global) //contexto global do node

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) 
// o contexto léxico é o do arquivo (módulo)
//Na função arrow o this é o contexto do módulo (module.exports)
comparaComThisArrow(global)

comparaComThisArrow(module.exports) // contexto do módulo

comparaComThisArrow = comparaComThisArrow.bind(obj) // forçando o contexto do obj
//usar o bind em uma arrow function não tem utilidade
//O contexto continua o mesmo
comparaComThisArrow(obj)            //false
comparaComThisArrow(module.exports) //true