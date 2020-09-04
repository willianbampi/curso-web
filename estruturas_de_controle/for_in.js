const notas = [6.7, 7.4, 9.8, 7.7]
for(let i in notas) {
    console.log(`i = ${i} - nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}