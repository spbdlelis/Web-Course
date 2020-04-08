const a = 1
const b = 2
const c = 3

//Mesma coisa
const obj1 = {
    a:a,
    b:b,
    c:c
}
const obj2 = {
    a,
    b,
    c
}
//Mesma coisa

const nomeAttr = 'nome'
const valorAttr = 'samuel'
const obj3 = {}

obj3[nomeAttr] = valorAttr

const obj4 = {[nomeAttr]: valorAttr}

console.log(obj3)
console.log(obj4)

const obj5 = {
    funcao1: function () {
        //...
    },
    funcao2 () {
        //Mesma coisa
    }
}

