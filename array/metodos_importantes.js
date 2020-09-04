const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona o elemento na primeira posicao do array
console.log(pilotos)

//usando splice para adicionar elementos
pilotos.splice(2, 0, 'Botas', 'Massa')//a partir do indice 2 do array, nao remove nenhum a partir desse indice, mas adiciona dois elementos
console.log(pilotos)

//usando splice para remover elementos
pilotos.splice(3, 1)//a partir do indice 3 do array, remove um
console.log(pilotos)

const algunsPilotos = pilotos.splice(2)//cria um novo array a partir do indice 2 do array de pilotos
console.log(pilotos)
console.log(algunsPilotos)

const outrosPilotos = pilotos.slice(1, 4)//cria um novo array a partir do indice 1 (incluindo o indice1) ate o indice 4 (mas nao o indice 4)
console.log(pilotos)
console.log(outrosPilotos)