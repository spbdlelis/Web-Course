const f = ano => {
    if(ano % 400 == 0)
        console.log('Sim')
    else if(ano % 100 == 0)
        console.log('Não')
    else if(ano % 4 == 0)
        console.log('Sim')
    else
        console.log('Não')
}

f(200)