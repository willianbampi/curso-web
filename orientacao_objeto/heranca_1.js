const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.prototype)
console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__)
console.log(volvo.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.__proto__)
console.log(Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function meuObj() {}
console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)