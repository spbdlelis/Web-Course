//Nas arrow functions o this é sempre relativo ao contexto no qual ela foi definida

function pessoa (){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa()