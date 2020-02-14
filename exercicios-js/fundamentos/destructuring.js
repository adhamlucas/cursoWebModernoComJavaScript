// novo recurso do ES2015
const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "rua ABC",
        numero: 1000
    }
}

const {nome, idade } = pessoa //tire e dentro do bojeto nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //se não vier nada, bemHumarada tem valor padrão true
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num} } = pessoa