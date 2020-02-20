// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis eternas à função

//Contexto léxico em ação!

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() { //o local físico onde a função declarada é muito importante
        return x
    } ///
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())