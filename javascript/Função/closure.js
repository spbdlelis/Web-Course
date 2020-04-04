//Closure: O escopo criado quando uma função é declarada
//Esse escopo permite à função acessar e manipular variáveis externas à função

//Contexto Léxico
const x = 'Global'

function fora() {
    let x = 'Local'
    function dentro () { // no contexto da funcao nao existe x, logo é buscado no contexto mais externo, ou seja, a função fora
        x = 'Alterei' //Alterar o valor de uma variável no contexto interno nãoaltera no externo
        return x
    }
    console.log(x)
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())
fora()