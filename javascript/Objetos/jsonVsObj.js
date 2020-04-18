const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma () { return a+b+c }
}
console.log(JSON.stringify(obj)) // Não armazena funções

console.log(JSON.parse('{"a":1, "b":2, "c":3, "d": {"jogo": 12}}'))
//Chaves entre aspas duplas