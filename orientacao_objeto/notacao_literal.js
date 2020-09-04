const a = 1
const b = 2
const c = 3

//versao antiga
const obj1 = {a:a, b:b, c:c}
console.log(obj1)

//versao atual
const obj2 = {a, b, c}
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}

//versao antiga
obj3[nomeAttr] = valorAttr
console.log(obj3)

//versao atual
obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//versao antiga de declaracao de funcao
const obj5 = {
    funcao1: function(){
        //...
    }
}
console.log(obj5)

//versao atual de declaracao de funcao
const obj6 = {
    funcao1(){
        //...
    }
}
console.log(obj6)