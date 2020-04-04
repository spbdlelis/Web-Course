console.log(soma(3,4)) // funções declaradas explicitamente são carregadas antes da interpretação

// function declaration
function soma (x,y) {
    return x+y
}

//function expression
const sub = function (x,y) {
    return x-y
}

// named function expression
const mult = function mult (x, y) { //Aparece o nome da function no stacktrace
    return x*y
}//pouco utilizada


