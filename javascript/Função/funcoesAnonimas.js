const soma = function () {
    let sum = 0
    for (let x in arguments)
        sum+=arguments[x]
    return sum
}

const imprimirResultado = function (a, b ,op = soma){
    console.log(op(a, b))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, function (x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x*y)

const pessoa = {
    falar: () => console.log('Ola')
}

pessoa.falar()