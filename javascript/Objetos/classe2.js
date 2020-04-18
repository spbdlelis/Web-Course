class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome) // Contrutor da superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor () {
        super('Lélis')
    }
}

const filho = new Filho
console.log(filho)