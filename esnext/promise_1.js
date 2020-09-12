let a = 1
console.log(a)

console.log(typeof Promise)

let b = new Promise(function(resolve) {
    resolve(3)
})

console.log(typeof b)

b.then(valor => console.log(valor))


const primeiroElemento = (string) => string[0]
const primeiraLetra = (string) => string[0]
const letraMaiuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMaiuscula)
    .then(console.log)//mesma coisa que .then(valor => console.log(valor))