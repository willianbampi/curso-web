function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }        
    })
}

async function gerarMegaSena(quantidadeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(quantidadeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros//resolvendo a promise
    } catch (e) {
        if(tentativas > 10) {
            throw 'Que chato'//rejeitando a promise
        } else {
            console.log(`Tentanto de novo automaticamente ${tentativas}`)
            return gerarMegaSena(quantidadeNumeros, tentativas + 1)
        }        
    }    
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)