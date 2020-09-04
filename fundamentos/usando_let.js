var numero1 = 1
{
    let numero2 = 2
    console.log('dentro numero1 ' + numero1)
    console.log('dentro numero2 ' + numero2)
}
console.log('fora numero1 ' + numero1)
//console.log('fora numero2 ' + numero2) inacessivel devido a estar fora de escopo

let numero3 = 3
console.log('fora numero3 ' + numero3)

//var tem escopo global e de função
//let tem escopo globo, de função e de bloco