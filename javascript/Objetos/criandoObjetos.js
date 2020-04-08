// Notação Literal
const obj1 = { 

}

console.log(obj1)

const obj2 = new Object // A partir de uma função construtora

console.log(obj2)

//função construtora própria
function Produto(nome, valor, desconto){
    this.nome = nome //valor público (não encapsulado)
    this.getPrecoComDesconto = () => valor * (1-desconto) 
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 7000.99, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome = '', salarioBase = 0, faltas = 0){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario: () => {
           return salarioBase/30 * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('João', 15000, 1)

console.log(f1.getSalario(), f2.getSalario())

const filha = Object.create(null)

filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(fromJSON)