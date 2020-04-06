const f = (str) => {
    const pontuacoes = str.split(' ')
    let contR = 0
    let pior = pontuacoes[0]
    let piorIndice = 0
    let rec = pontuacoes[0]
    for (let index in pontuacoes){
        if(pontuacoes[index] > rec){
            rec = pontuacoes[index]
            contR++
        }
        if(pontuacoes[index] < pior){
            pior = pontuacoes[index]
            piorIndice = index
        }
    }
    console.log(`[${contR}, ${Number(piorIndice)+1}]`)
}

f('10 20 20 8 25 3 0 30 1')