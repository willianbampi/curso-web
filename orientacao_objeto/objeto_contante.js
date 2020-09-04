//pessoa esta no endereço de memoria 
//e no endereco de memoria é onde o objeto realmente esta criado
const pessoa = {nome: 'Joao'}
console.log(pessoa)
//pessoa continua apontando para o mesmo endereço de memoria
//e o que esta sendo alterado é a informação dentro do objeto
//o que eu nao posso alterar é a estrutura do objeto
pessoa.nome = 'Pedro'
console.log(pessoa)

//nesse caso nao pode
//porque esta sendo criado um novo objeto em memoria
//e tentando fazer com que pessoa aponte para esse novo objeto
//como pessoa é constante nao vai permitir
pessoa = {nome: 'Ana'}

//congelamento de objeto
//atraves disso, nao é possivel mais mexer nas informacoes do objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)
pessoa.endereco = 'Rua Um'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Mateus'})
console.log(pessoaConstante)
pessoaConstante.endereco = 'Rua Dois'
console.log(pessoaConstante)
pessoaConstante = {saudacao = 'Ola'}
console.log(pessoaConstante)