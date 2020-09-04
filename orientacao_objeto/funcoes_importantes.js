const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
})
pessoa.dataNascimento = '02/02/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const resultante = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(resultante)
resultante.c = 1234
console.log(resultante)