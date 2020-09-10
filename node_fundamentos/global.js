//console.log(global)
globalThis.minhaApp = {//para essas informacoes nao serem alteradas em nenhum outro local pode-se usar = Object.freeze({}) ao inves de {}
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema'
}