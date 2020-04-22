const fs = require('fs') // file system

const path = __dirname + '/arquivo.json'

//Sincrono
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)

//Assincrona
fs.readFile(path, 'utf-8', (err, conteudo) => {
    if(err != null)
        return 0
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})