function meuObj() {}
console.log(meuObj.prototype)

const obj1 = new meuObj
const obj2 = new meuObj

console.log(obj1.__proto__)
console.log(obj2.__proto__)
console.log(obj1.__proto__ === obj2.__proto__)//os prototipos desses objetos apontam para o mesmo prototype pois possuem a mesma funcao construtora
console.log(meuObj.prototype === obj1.__proto__)

meuObj.prototype.nome = 'Anonimo'
meuObj.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObj.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log((new meuObj).__proto__ === meuObj.prototype)
console.log(meuObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__ === undefined)