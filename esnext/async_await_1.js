/**
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValor()
    let valorRapido = await retornarValorRapido()

    //await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    console.log(`Async/Await rapido ${valorRapido}...`)
    
    //await esperarPor(1500)
    console.log(`Async/Await ${valor+1}...`)
    console.log(`Async/Await rapido ${valorRapido}...`)
    
    //await esperarPor(1500)
    console.log(`Async/Await ${valor+2}...`)
    console.log(`Async/Await rapido ${valorRapido}...`)

    return valor + 3
}

async function executarDeVerdade() {
    //executar().then(console.log)
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()