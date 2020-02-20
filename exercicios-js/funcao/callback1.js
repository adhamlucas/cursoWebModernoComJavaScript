const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir) //callback, porque ele enconra algo, chama função de volta
fabricantes.forEach((fabricante) => console.log(fabricante))