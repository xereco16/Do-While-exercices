const {
    ler,
    escrever
} = require('./utils/utils');


let vezes = 1
let limite = 10
let soma = 0
let anterior = 0
let proximo = 1


let num = Number(ler(":"))

do {
    for (let i = 0; i < num; i++) {
        soma = anterior + proximo
        anterior=proximo
        proximo=soma
    }
    vezes++
} while (vezes <= limite);
escrever(anterior)