const Carro = function (velocidadeMaxima = 200, delta = 5){
    const self = this
    //atributo privado
    let velocidadeAtual = 0 // é privado pois não tem o this, logo a instância do objeto nao possui esse atributo

    //metodo publico
    self.acelerar = () =>{
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual+= delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    //metodo publico
    self.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
