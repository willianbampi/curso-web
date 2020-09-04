const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome + ' : ' + idade)

const {nome: n, idade: i} = pessoa
console.log(n + ' : ' + i)

const {sobrenome, bemHumorada} = pessoa
console.log(sobrenome + ' : ' + bemHumorada)

const {telefone = '123465489'} = pessoa
console.log(telefone)

const {endereco: ender} = pessoa
console.log(ender)

const {endereco: {logradouro, numero, cep = '7777777'}} = pessoa
console.log(logradouro + ' : ' + numero + ' : ' + cep)