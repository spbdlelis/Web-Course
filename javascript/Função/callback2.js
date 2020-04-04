const notas = [7.7, 6.8, 9.0, 4.5, 5.6]

//Sem callback
let notasBaixas = []

for (let i in notas){
    if(notas[i] <7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

//Com callback
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas) 