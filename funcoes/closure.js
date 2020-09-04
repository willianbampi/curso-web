//closure é o escopo criado quando uma funcao é declarada
//esse escopo permite a funcao acessar e manipular as variaveis externas a funcao
//contexto lexico em acao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())
//vai printar o valor Local da variavel x
//devido a minhaFuncao acessar a funcao fora, e na funcao fora estar sendo declarada uma variavel x
//dentro da funcao fora estar sendo declarada outra funcao que retonar o valor de x declarado dentro da funcao fora
//nao vai pegar o valor declarado globalmente devido aos escopos das funcoes dentro e fora