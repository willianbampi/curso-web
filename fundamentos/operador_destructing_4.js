function rand ([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const array = [40, 50]
console.log(rand(array))
console.log(rand([50, 25]))
console.log(rand([10]))
console.log(rand([, 30]))
console.log(rand([]))
//console.log(rand()) vai gerar erro porque nao tem nenhum array para ser destruturado