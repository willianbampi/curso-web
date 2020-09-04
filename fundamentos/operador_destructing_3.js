function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 40, max: 50}
console.log(rand(obj))
console.log(rand({min: 20, max: 25}))
console.log(rand({min: 10}))
console.log(rand({max: 30}))
console.log(rand({}))
//console.log(rand()) vai gerar erro porque nao tem nenhum objeto para ser destruturado