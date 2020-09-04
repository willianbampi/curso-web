const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto Maximo'] = 0.40 //evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        nomeObj: 'Obj',
        obj: {
            nomeObj2: 'Obj2'
        }
    }
}

console.log(prod2)