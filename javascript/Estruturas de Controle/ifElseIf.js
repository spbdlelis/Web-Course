Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7, 9)){
        console.log('Aprovado')
    }else if (nota.entre(4, 7)){
        console.log('Recuperação')
    }else if (nota.entre(0, 4)){
        console.log('Reprovado')
    }else{
        console.log('Nota Inválida')
    }
}

imprimirResultado(-1)
imprimirResultado(10)
imprimirResultado(11)
imprimirResultado(3)
imprimirResultado(5)
imprimirResultado(8)