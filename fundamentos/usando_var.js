{{{{var sera = 'Sera?'}}}}
console.log(sera)

function teste(){
    var local = 123
    console.log('dentro da funcao ' + local)
}
teste()
//console.log('fora da funcao ' + local) gera erro pois nao esta declarada fora da funcao

var numero = 1
{
    var numero = 2
    console.log('dentro ' + numero)
}
console.log('fora ' + numero)

//var tem escopo global e de função