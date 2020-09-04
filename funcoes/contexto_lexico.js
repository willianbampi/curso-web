const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
//quando executar vai apresentar o valor Global
//isso porque o console.log() esta presente na minhaFuncao que é de escopo global
//portanto o valor apresentado vai ser o valor da constante do escopo global, mesmo escopo da funcao minhaFuncao()
//nao o valor da constante declarada dentro do metodo exec, que é um escopo restrito a funcao exec()
