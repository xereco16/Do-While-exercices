const {
    ler,
    escrever
} = require('./utils/utils');


let limite = 10
let vzs =1
let contador = Number(ler("Digite um número: "))
let soma = 0



do {
    soma += contador;
    contador +=1
    vzs++
    escrever(soma)
} while (vzs <= limite);