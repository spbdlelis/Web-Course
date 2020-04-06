function bhaskara (a, b, c) {
    const delta = b**2 - (4*a*c)
    if(delta < 0)
        return "Não possui Raízes reais"
    return [(-b+delta**(1/2))/(4*a), (-b-delta**(1/2))/(4*a)]
}

console.log(bhaskara(-3, -5, 12))