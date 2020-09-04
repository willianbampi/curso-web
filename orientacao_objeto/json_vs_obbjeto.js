const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}
console.log(obj)
console.log(JSON.stringify(obj))//sem a funcao

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{"a": 1, "b": 5.4, "c": "string", "d": true, "e": {}, "f": []}'))