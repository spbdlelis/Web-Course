const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // this nesse contexto é algo diferente do objeto, não existindo assim o atributo saudacao

const falarDePessoa = pessoa.falar.bind(pessoa) //desse modo, o this será sempre o contexto do objeto pessoa

falarDePessoa()