//procedural foco na funcao
function processamento(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3
}

//orientacao objeto foco no dado
objeto = {
    processamento2() {
        return true
    }
}
objeto.processamento2()

const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.marca
delete produto['preco']
console.log(produto)

const carro = 
{
    modelo: 'A4',
    valor: 89000,
    proprietario: 
    {
        nome: 'Raul',
        idade: 56,
        endereco: 
        {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: "Ana",
            idade: 42
        }
    ],
    calcularValorSeguro: function(){

    }
}
console.log(carro)
carro.proprietario.endereco.numero = 1000
carr['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
delete carro.condutores
console.log(carro)
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)//vai retornar undefined mas nao vai dar erro
console.log(carro.condutores.length)//erro ao tentar acessar o tamanho de algo que nao existe