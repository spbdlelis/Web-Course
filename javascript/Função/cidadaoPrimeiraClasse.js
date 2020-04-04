//First Class Object (Citizen)
//High order function

//Criar de Forma Literal

function f1() {
    return 2
}

//Armazenar em uma variável
const f2 = function (){
    return 2
}

//Armazenar em um Array
const arr = [function (){ return 2}, f1, f2]

console.log(arr[0]())

//Armazenar em um Atributo de objeto
const obj = {}
obj.falar = function(){
    return 'Olá'
}

//Passar uma função como parâmetro
function run(func){
    func()
}

//Retornar uma função
function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4) // Invocando o retorno da função mais externa
const cinco = soma(2,3)
cinco(4)