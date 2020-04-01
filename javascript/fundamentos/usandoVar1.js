{{{{ var sera = 'Será' }}}}

console.log(sera)

function teste(){
    var local = 123
}

teste()

//console.log(local) //local está fora do escopo

//Var está sempre no escopo global ou no escopo de uma função
//Var pode gerar um problema de sobrescrita no objeto global (window ou global)