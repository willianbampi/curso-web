for(let i = 0; i < 10; i++){
    console.log('dentro do for ' + i)
}
//console.log('fora do for ' + i) erro pois está fora do escopo

const funcs = []
for(let j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(j)
    })
}

funcs[2]()
funcs[8]()
//vai imprimir os valores dos respectivos indices do loop devido ao escopo do let