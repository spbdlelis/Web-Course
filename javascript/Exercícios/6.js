const fs = (c, i, t) => console.log((c*(1+i*t)).toFixed(2)) 
const fc = (c, i, t) => console.log(((Math.pow((1+i),t)*c).toFixed(2)))

fs(1000, 0.01, 10)
fc(1000, 0.01, 10)
