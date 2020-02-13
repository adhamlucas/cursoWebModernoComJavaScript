// par nome/valor
const saudacao = "Opa" //contexto léxico1

function exec() {
    const saudacao = "falaa" // Contexto léxico, ou seja o contexto da palavra está ena função
    return saudacao
}

//const saudacao = " OPaa" // error porque já existe esse nome neste contexto léxico
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        lugradouro: "RUa Muito Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)