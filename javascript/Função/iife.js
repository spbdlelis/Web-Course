// IIFE -> immediately invoked function expression

(function() {
    var a = 1
    console.log('será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

//console.log(a) //não está disponível