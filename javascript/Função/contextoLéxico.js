const valor = 'Global'

function minhaFuncao() { // A função carrega consigo o contexto da declaração
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao() //nessa chamada, ela leva o valor 'Global', o contexto de declaração é o valor 'Global'
}

exec()