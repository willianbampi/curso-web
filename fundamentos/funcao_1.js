function imprimmirSoma(a, b){
    console.log(a + b)
}

imprimmirSoma(2, 3)
imprimmirSoma(2)
imprimmirSoma(2, 3, 4, 5, 6)
imprimmirSoma()

function soma(a, b = 0){
    return a + b
}

console.log(soma(1, 2))
console.log(soma(2))
console.log(soma())
console.log(soma(1, 2, 3, 4, 5))