function soma(){
    let soma = 0
    for(let i in arguments)
        soma += arguments[i]
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,3,4,5))
console.log(soma(0,3456,34,75,67,567,4567))
console.log(soma({}))

