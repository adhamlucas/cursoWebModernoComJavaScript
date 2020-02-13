const nome = 'Rebeca'
const concatenacao = 'olá' + nome + '!'
const template = ` 
    Olá
    ${nome}!` //para template string tem que usar a crase (acento grave) para funcionar

console.log(concatenacao, template)


// expressões

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei..... ${up('cuidado')}!`)
