const a = {name: 'Teste'} //referencia para o objeto
console.log(a)

const b = a //referencia para o 'a' que faz referencia para o objeto (atribuição por referencia)
console.log(b)

b.name = 'Opa'
console.log(a)
console.log(b)

let c = 3; //declara tipo primitivo
console.log(c)

let d = c //declara uma variavel fazendo uma copia por valor, pois é primitivo e nao por referencia como acontece nos objetos
console.log(d)

d++
console.log(c)
console.log(d)

let valor
console.log(valor) //undefined
//console.log(valor2) it's not defined

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) nao pode operar toString pois a variavel é nula

const produto = {}
console.log(produto.preco) //atributo preco nao esta definido dentro do produto
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evitar atribuir undefined, pois o atributo vai continuar a ter valor, no caso undefined
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

delete produto.preco //remover atributo
console.log(produto)

produto.preco = 4.00
console.log(produto)
produto.preco = null
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)