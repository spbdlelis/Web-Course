const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    //Pegar a mulher chinesa com o menor salário
    const getChineseWomen = obj => obj.pais === 'China' && obj.genero === 'F'
    const funcionarios = response.data
    const chineseWomen = funcionarios.filter(getChineseWomen)
    aMulher = chineseWomen.reduce( (least , current ) => current.salario < least.salario ? current : least)
    console.log(funcionarios)
    console.log(aMulher)
})



