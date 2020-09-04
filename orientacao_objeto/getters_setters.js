const sequencia = {
    _valor: 1,//comecar com _ é convencao para nome de atributo privado
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)