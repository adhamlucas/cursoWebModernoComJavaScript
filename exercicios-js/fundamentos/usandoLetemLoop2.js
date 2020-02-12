const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(() => {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Arrow function,  antes da seta => é parametro, depois é corpo da função (parametros) => {corpo da funcao} ou retorno implicio (a,b) => a +b