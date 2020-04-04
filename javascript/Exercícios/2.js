const f = (a, b, c) => {
    [a, b ,c] = [a, b, c].sort()
    if(a+b <= c ) 
        console.log('Nao forma Triangulo')
    else if (a == b && b == c)
        console.log('Equilátero')
    else if (a == b || b == c || a == c)
        console.log('Isósceles')
    else
        console.log('Escaleno')
}

f(3, 4, 5)
