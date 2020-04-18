console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Samuel Lélis'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3].first())

String.prototype.toString = function () { // Causa Efeitos Colaterais
    return 'Lascou Tudo'
}

console.log('Samuel Lélis'.reverse())