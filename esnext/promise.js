function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//aceita apenas um parametro, pode ser usado um objeto para passar mais informaçoes
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))