const rand = (min, max) => Math.floor(Math.random()*(max-min)+min)

let op
do{
    op = rand(-1,20)
    console.log('Sorteado =', op)
}while(op != -1)

console.log('Fim')