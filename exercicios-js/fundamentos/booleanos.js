let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //nega a neação e mostra o valor booleano original da variável

console.log(' os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"teste")
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!(""))