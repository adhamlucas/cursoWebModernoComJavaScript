const imprimirResultado = function(nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("reprovad0")
            break
        default:
                console.log("NOta inválida")
    }
}

imprimirResultado(5)
imprimirResultado(-1)