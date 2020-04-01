const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//let respeita o valor em que a função foi definida
//diferentemente do var que simplesmente pega o último valor
//visto que var está sempre no escopo global