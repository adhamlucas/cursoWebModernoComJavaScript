let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
} //função arrow é sempre uma função anonima, se você quiser chamar ela depois, tem que armazenar em uma constante

dobro = a =>  2 * a //Você pode retornar algo direto sem o corpo, quando há funçõe pequenas. retorno implicio

console.log(dobro(Math.PI))

let ola = function() {
    return "Ola"
}

ola = () => "olá"
ola = _ => "Olá" //possui um param
console.log(ola())