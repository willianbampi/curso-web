//middleware pattern ou chain of responsibility
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto) => {
    contexto.valor3 = 'mid3'
}

const exec = (contexto, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length && middleware[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
//exec(contexto, passo1, passo2, passo3)
exec(contexto, passo2, passo1, passo3)
console.log(contexto)