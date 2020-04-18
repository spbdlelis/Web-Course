Object.prototype.attr0 = '0' // Cuidado
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: 'Z'}
const filho = { __proto__: pai, attr3: 'C'}


console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr3) // Sombreamento, a primeira ocorrência é retornada


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta >= this.velMax){
            this.velAtual = this.velMax
        }else{
            this.velAtual+=delta
        }
    },
    status () {
        return `${this.velAtual} / ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(volvo)

volvo.acelerar(5)

console.log(volvo.velAtual)