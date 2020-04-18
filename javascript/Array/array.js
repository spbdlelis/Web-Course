/* let aprovados = ['Bia', 'Carlos', 'Ana']

//aprovados.splice(1, 2)
//aprovados.splice(1, 2, 'E1', 'E2')
aprovados.splice(1, 0, 'E1', 'E2')
console.log(aprovados) */

const lista = [1, 2, 3, 4]

lista.forEach2 = function (funcao ) {
    for(let index in this){
        value = this[index]
        funcao(value, index, this) //valor, indice e array
    }
}

const funcao = l => console.log(l)

lista.forEach2(funcao)