console.log(typeof console)
console.log(Math.ceil(6.7))

const obj = {}

obj.nome = 'Bola'
//obj['nome'] = 'Bola2' //equivalente

console.log(obj)

function Obj(nome){
    this.nome = nome //equivalente a self
    this.exec = function (){
        console.log('Executando uma função(método)')
    }
}

const obj2 = new Obj('Cadeira')

console.log(obj2.nome)

const obj3 = new Obj('Mesa')
console.log(obj3.nome)
obj3.exec()