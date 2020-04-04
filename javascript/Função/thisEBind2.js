function pessoa (){
    this.idade = 0
    const self = this //setando essa constante evita a variação do this (GENIAL)
    setInterval(function(){ // Realiza essa função a cada x ms
        self.idade++        //No momento da execução quem invoca é o temporizador, alterando o this
        console.log(self.idade)
    }/* .bind(this) */, 1000)     //O bind sendo usado aqui 'amarra' o contexto da função ao this
}

new pessoa