//para printar no console, acessar o terminal, dentro da pasta node
//digitar: node entrada_e_saida.js -a
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Fala Anonimo"\n')
    process.exit()
} else {
    //se nao for passado o paramentro -a vai pedir o nome do usuario 
    //depois printar essa informacao com uma frase
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}