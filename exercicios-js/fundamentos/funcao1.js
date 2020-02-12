// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Javascript aceita, e a soma será de inter + undefined == NaN
imprimirSoma(2, 10, 4, 5, 6, 7) // ele pega somente os primeiros números e os outros parametros ela ignora

// funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // vai tentar somar resultado undefined com 0 e o resultado é NaN