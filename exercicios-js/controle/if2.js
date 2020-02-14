function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log("Final")
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7);{ //aqui é o menso que uma sentençaj fechada e o bloco d eçodigo está fora, então sempre vai executar, CUIDADO com as estruturas de contorle

        console.log(num)
    }
}

teste2(6)
teste2(8)