const atrbNota = conceito => {
    const round = conceito => conceito + 5 - (conceito % 5)
    if(conceito < 38 ){ 
        console.log(conceito, 'Reprovado')
    }else if (conceito % 5 > 2){
        console.log(round(conceito), 'Aprovado')
    }else{
        console.log(conceito, 'Aprovado')
    }
}

atrbNota(38)
atrbNota(37)
atrbNota(84)
atrbNota(82)