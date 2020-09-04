//iife -> immediately invoked function expression
//foge do escopo global e permite que o que estiver dentro da funcao seja imediatamente executado no carregamento
(function() {
    console.log('Sera executado na hora')
    console.log('Fog do escopo mais abrangente')
})()