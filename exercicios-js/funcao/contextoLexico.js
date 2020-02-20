const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()

//As funções quando são declaradas elas elevam consigo o contexto onde elas são declaradas.
//Então no caso da minhaFUncao ela levou o contexto da variável globa