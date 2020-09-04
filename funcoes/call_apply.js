function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}
console.log(getPreco())
console.log(produto)
console.log(produto.getPreco())

global.preco = 20
global.desconto = 0.1
console.log(getPreco())

const carro = {
    preco: 49990,
    desconto: 0.20
}
console.log(getPreco.call(carro))//passando apenas o contexto
console.log(getPreco.call(carro, 0.17, 'U$'))//passando o contexto e os parametros

console.log(getPreco.apply(carro))//passando apenas o contexto
console.log(getPreco.apply(carro, [0.17, 'U$']))//passando o contexto e os parametros