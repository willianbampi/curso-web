//Funcao em JS é First-Class Object (Citizens)
//Higher-order function


//literal
function function1() {

}

//armazenar em um variavel
const function2 = function() {

}

//armazenar em um array
const array = [function(a, b) {return a + b}, function1, function2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function() {return 'Olá'}
console.log(objeto.falar())

//passar funcao como parametro
function run(fun) {
    fun()
}
run(function() {console.log('Executando...')})

//retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const resultado = soma(2, 3)
resultado(4)