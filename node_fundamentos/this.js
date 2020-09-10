console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)
//fora de uma funcao this aponta para module.exports

this.atencao = ';;;'//dentro de module.exports

function logThis(){
    console.log('Dentro da funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this == global)
    //dentro de uma funcao this aponta para global

    this.perigo = '...'//dentro de global
}
logThis()