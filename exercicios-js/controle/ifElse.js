const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovao!")
    }
}


imprimirResultado(10)

imprimirResultado("Epa") //Tomar cuidado com esse tipo de situação, pois javacsript aceita esse tipo de coisa por ser fracamente tipada