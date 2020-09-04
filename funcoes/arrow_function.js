let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//return esta implicito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui apenas um parametro

console.log(ola())

//this dentro de uma arrow function torna-se estatico ao escopo
function pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++
        console.log(this.idade)//nao precisa armazenar o this numa constante (self) e nem usar o bind
    }, 1000)
}

new pessoa

let comprarComThis = function(param) {
    console.log(this === param)
}

//contexto node usar o global, no console do browser usa o window
comprarComThis(global)
comprarComThis(this)

const obj = {}
comprarComThis = comprarComThis.bind(obj)
comprarComThis(global)
comprarComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //arrow function nao permite mudar o this para o obj mesmo tentando forcar com bind
comparaComThisArrow(module.exports)