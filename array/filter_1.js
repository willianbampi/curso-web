const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const fragil = produtos.filter(function(produto) {
    return produto.fragil
})
console.log(fragil)

const caro = produtos.filter(function(produto) {
    return produto.preco > 15
})
console.log(caro)

const caro2 = produto => produto.preco >= 500
const fragil2 = produto => produto.fragil
const caroECaro = produtos.filter(caro2).filter(fragil2)
console.log(caroECaro)