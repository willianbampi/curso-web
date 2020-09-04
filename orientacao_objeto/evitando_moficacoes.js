//Object.preventExtensions prevenir o aumento de atributos do objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
})
console.log('Extensivel: ' + Object.isExtensible(produto))

produto.nome = 'Borracha'//permite
produto.descricao = 'Borracha escolar branca'//nao permite
delete produto.tag//permite
console.log(produto)

//Objecto.seal prevenir aumento ou redução de atributos do objeto
const pessoa = {
    nome: 'Juliana',
    idade: 23
}
Object.seal(pessoa)
console.log('Selado: ' + Object.isSealed(pessoa))

pessoa.nome = 'Pedro'//permite
pessoa.dataNascimento = '21/02/1998'//nao permite
delete pessoa.idade//nao permite
console.log(pessoa)

//Object.freeze prevenir qualquer tipo de alteração no objeto
const carro = {
    modelo: 'F40',
    velocidadeMaxima: 300
}
Object.freeze(carro)
console.log('Congelado: ' + Object.isFrozen(carro))

carro.modelo = 'V40'//nao permite
carro.cor = 'Branco'//nao permite
delete carro.velocidadeMaxima//nao permite
console.log(carro)