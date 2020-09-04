const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas funcional e orientado objetos

const falarPessoa = pessoa.falar.bind(pessoa) //bind informa para o metodo quem vai o this
falarPessoa()

function Pessoa2() {
    this.idade = 0
    const self = this//se nao foi usar o bind, usa-se o self para o this nao variar
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)//o bind(this) informa para a funcao setInterval que o this é o pessoa2
}

new Pessoa2