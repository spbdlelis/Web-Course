const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(valor, indice, array){
    console.log(`${indice +1}. ${valor}`)
    console.log(array)
}
//A função a ser passada no forEach aceita até 3 valores, sendo respectivamente
//valor, indice e o array completo

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})