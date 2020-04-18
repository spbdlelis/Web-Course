function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)

//Simulando o new
function novo(f, ...params) { // Operador Spread que converte todos os parâmetros em um array
    const obj = {} //Criando o objeto
    obj.__proto__ = f.prototype // associando o protótipo
    f.apply(obj, params) //Aplicando ao objeto os parâmetros
    return obj // retornando o objeto
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula4, aula3)



