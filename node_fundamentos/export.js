console.log(module.exports === this)
console.log(module.exports === exports)

//formas de exportar informacoes do modulo
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}
console.log(module.exports)

module.exports = {
    publico: true
}
console.log(module.exports)