const peso1 = 1

console.log(peso1)
console.log(typeof peso1)

const peso2 = Number('1.0')

console.log(peso2)
console.log(Number.isInteger(peso2))

const av1 = 9.85
const av2 = 7.85

const total = av1*peso1 + av2*peso2
const media = total/(peso1+peso2)

console.log(media)
console.log(media.toFixed(1))
console.log(media.toString(10))



