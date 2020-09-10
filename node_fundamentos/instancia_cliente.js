const contadorA = require('./instancia_unica')
const contadorB = require('./instancia_unica')

const contadorC = require('./instancia_nova')()//invoca a funcao factory
const contadorD = require('./instancia_nova')()

//unica instancia
console.log(contadorA.valor)
console.log(contadorB.valor)
console.log()
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)
console.log()

//instancia nova
console.log(contadorC.valor)
console.log(contadorD.valor)
console.log()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)