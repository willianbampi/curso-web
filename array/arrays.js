console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])
console.log()

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carlos', 'Ana', 'Bia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Pedro')
console.log(aprovados.length)

aprovados[9] = 'Fernanda'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
console.log(aprovados)

aprovados.sort()//alterou o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2')//excluir um elemento a partir do indice 1 e adicionar dois elementos a partir do indice excluido (adicionar é opcional)
console.log(aprovados)