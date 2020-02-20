// fUNÇÃO EM Js É FRIST-CLASS OBJECT (citizens)
// high-order functions
//criar forma de forma literal

function fun1() { } // se não retornar nada em uma função ela retorna undefined


//armazenar em uma variável
const fun2 = function () {} //uma variável pode receber uma função anomina


//armezaer uma função dentro de um array
const array = [function (a,b) { return a + b}, fun1, fun2] //pode-se dizer eclarar função dentro do array

console.log(array[0](2, 3))

// Armazenar em um atrbotuo de objeto
const obj = {}
obj.falar = function () { return "opa"}
console.log(obj.falar())


//passar função como parametro
function run(fun) {
    fun()
}

run(function () {console.log("Executando...")})

// um função pode retornar/conter uma função
function soma(a,b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)