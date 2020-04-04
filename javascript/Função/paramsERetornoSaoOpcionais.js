function area(largura, altura){
    const area = largura*altura
    if (area>20){
        console.log('Valor acima do permitido')
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2,50))
console.log(area(2))
console.log(area(2, 3, 4, 5, 6))