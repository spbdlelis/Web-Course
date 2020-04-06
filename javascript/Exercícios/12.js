const f = num => {
    let factor = 1
    while(num > 1){
        factor *= num
        num--
    }
    return factor
}

console.log(f(5))