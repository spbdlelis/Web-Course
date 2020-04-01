var numero = 1
{
    let numero = 2
    console.log("dentro = ",numero)
}
console.log("fora = ", numero)

// A prioridade inicial é para o escopo interno
// A prioridade secundária para o escopo externo

//let possui 3 escopos:
//Escopo geral
//Escopo de função
//Escopo de bloco