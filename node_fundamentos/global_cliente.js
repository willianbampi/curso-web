require('./global')

console.log(minhaApp.saudacao())
console.log(global.minhaApp.saudacao())
console.log(global.minhaApp.nome)

minhaApp.nome = 'Alterado'
console.log(minhaApp.nome)