//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5,3)

imprimirSoma(2) // 2+undefined = NaN

imprimirSoma(2,3,4,5,6,7) // os 2 primeiros

imprimirSoma() //undefined+undefined

//funcao com retorno
function soma(a, b = 0){
    return a+b
}

console.log(soma(2, 3))