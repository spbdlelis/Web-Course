const ferrari = {
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //objeto pai
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function  meuObjeto () {

}

console.log(meuObjeto.prototype)