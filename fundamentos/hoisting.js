console.log('a = ' + a)
var a = 1
console.log('a = ' + a)

//interpretador fez:
var b
console.log('b = ' + b)
b = 2
console.log('b = ' + b)

function teste(){
    console.log('c dentro = ' + c)
    var c = 3
    console.log('c dentro = ' + c)
}
teste()

//interpretador fez:
function teste2(){
    var d
    console.log('d dentro = ' + d)
    d = 4
    console.log('d dentro = ' + d)
}
teste2()

//para o let isso nao ocorre, tem que sempre definir antes