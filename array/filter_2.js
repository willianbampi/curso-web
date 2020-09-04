Array.prototype.filter2 = function(callback) {
    newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const caro2 = produto => produto.preco >= 500
const fragil2 = produto => produto.fragil
const caroECaro = produtos.filter2(caro2).filter2(fragil2)
console.log(caroECaro)