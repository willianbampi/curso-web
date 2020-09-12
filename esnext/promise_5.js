function funcionarOuNao(valor, chanceErro) {
    return new Promise((revolse, reject) => {
        try {
            con.log('Temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                revolse(valor)
            }
        } catch (e) {
            reject('Ocorreu um erro')
        }        
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(valor => `Mensagem: ${valor}`)
    .then(
        valor => consol.log(valor),
        err => console.log(`Erro especifico: ${err}`)
    )
    .then(console.log('Quase Fim'))
    .catch(err => console.log(`Erro geral: ${err}`))//vai conseguir tratar qualquer tipo de erro no encadeamento
    .then(() => console.log('Fim'))//pode executar um then() porem nao tem mais dados