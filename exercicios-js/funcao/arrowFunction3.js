let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // testar para ver se this fica no global
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)// tentar amarrar o this da função arrow a outro objeto
comparaComThisArrow(obj) //Arrow function permanece inalterando o seu this
comparaComThisArrow(module.exports) //continua apontando para o objeto  a qual ele foi apontado primordialmente