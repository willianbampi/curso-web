//function declaration
//posso chamar a function declaration antes mesmo de declarar que vai dar certo
function soma(x, y) {
    return x + y
}

//function expression
//nao posso chamar a function expression antes de declarar a funcao
const sub = function(x, y) {
    return x - y
}

//named function expression
//melhora na visualizacao da stck trace de um debug pois o nome da funcao aparece explicitamente
//nao posso chamar a named function expression antes de declarar a funcao
const mult = function mult(x, y) {
    return x * y
}