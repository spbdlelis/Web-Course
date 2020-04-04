class Pessoa {
    constructor (nome) {
        self.nome = nome
    }

    falar () {
        console.log(`meu nome é ${self.nome}`)
    }
}

const p1 = new Pessoa ('João')

p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

p2 = criarPessoa('João')
p2.falar()