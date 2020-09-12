for (let letra of "Codar") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//percorre encima do indice e atraves do indice acessa o valor
for (let i in assuntosEcma) {
    console.log(i)
}

//percorre encima dos valores e não encima dos indices
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

//percorrendo pela chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//percorrendo por valor
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//destruturando com entries
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}