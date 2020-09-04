for(var i = 0; i < 10; i++){
    console.log('dentro do for ' + i)
}
console.log('fora do for ' + i)

const funcs = []
for(var j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(j)
    })
}

funcs[2]()
funcs[8]()
//vai imprimir em todas as situações de acesso a funcs o valor de 10 devido ao escopo de var