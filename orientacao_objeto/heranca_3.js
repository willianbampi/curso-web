const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}
console.log(pai)

const filha1 = Object.create(pai)//criando objeto novo tendo como prototipo outro objeto
filha1.nome = 'Ana'
console.log(filha1)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})
console.log(filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha1){
    console.log(key)
}

//verificar se a propriedade do objeto é do proprio objeto ou se veio por herança
for(let key in filha1){
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

for(let key in filha2){
    console.log(key)
}

//verificar se a propriedade do objeto é do proprio objeto ou se veio por herança
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}