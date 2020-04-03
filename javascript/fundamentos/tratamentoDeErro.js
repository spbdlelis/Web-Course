function tratarErroELancar(erro){
    throw 'nosso suporte já foi Notificado'
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally { //esse bloco é executado de qualquer forma, com ou sem erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)