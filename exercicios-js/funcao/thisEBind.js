const pessoa = {
    saudacao: "Bom dia!",
    falar (){
        console.log(this.saudacao)
    }
}


pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradgimas: funciona e OBJETO

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind é responsável por amarrar o bojeto da função, ou seja pegaria o this de pessoa
falarDePessoa()