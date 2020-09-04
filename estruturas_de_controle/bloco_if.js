function boaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(false)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(' ')
seForVerdade('oi')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(1)
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
seForVerdade({nome: 'Ana'})
seForVerdade(true)

function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7);{
        console.log(num)
    }
}

teste2(6)
teste2(8)