//cadeia de prototipo (prototype chain)
Object.prototype.atributo0 = '0'//evitar esse tipo de manipulacao do Object

const avo = {
    atributo1: 'B'
}

const pai = {
    __proto__: avo,
    atributo2: 'B',
    atributo3: 'D'
}

const filho = {
    __proto__: pai,
    atributo3: 'C'
}

console.log(filho.atributo0)
console.log(filho.atributo1)
console.log(filho.atributo2)
console.log(filho.atributo3)//atributo do filho sombreu o atributo do pai

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerar(delta) {
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324//shadowing ou sombreamento
}
console.log(ferrari)

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
console.log(volvo)

Object.setPrototypeOf(ferrari, carro)//estabelecendo que ferra tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerar(300)
console.log(ferrari.status())

volvo.acelerar(100)
console.log(volvo.status())