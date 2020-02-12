let valor // não inicializado
console.log(valor)  //undeefinied quer dizer que a variável foi definida, mas não tem valor
//console.log(valor2) // is not defined quer dizer que varíavel nem foi declarada

valor = null //Como fazer uma varíavel não apontar para ninguém, pensnado em atribuição por referência (ponteiros C)
console.log(valor)
//console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined as variáveis, deixe par alinguagem atribuir

console.log(!!produto.preco)
//delete produto.preco //como deletar um atributo
console.log(produto)


produto.preco = null // sem preço, se tiver que decidir use null ao inveś de undefined
console.log(!!produto.preco)
console.log(produto)
