console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1['tamanho'] = 32
console.log(obj1.nome)
console.log(obj1.tamanho)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
obj2.exec()
console.log(obj3.nome)
obj3.exec()