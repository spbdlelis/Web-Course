const fs = (c, i, t) => c*(1+i*t).toFixed(2)
const fc = (c, i, t) => (c*(1+i)**t).toFixed(2)

console.log(fs(1000, 0.01, 10))
console.log(fc(1000, 0.01, 10))