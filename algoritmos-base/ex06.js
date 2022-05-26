const {
    ler,
    escrever
} = require('./utils/utils');


let limite = Number(ler("quanots alunos tem na sala? "))
let contador = 1
let media1
let media2
let mediaTotal
let arrMediaTotal =[]
let soma = 0
let mediaTurma

let alunosApr = 0
let alunosRep = 0


do {
    media1 = Number(ler("qual a sua primeira media?"))
    media2 = Number(ler("qual a sua segunda media?"))
    mediaTotal = (media1+media2)/2
    arrMediaTotal.push(mediaTotal)

    if (mediaTotal>=7){
        escrever("\nSua media foi "+mediaTotal+", você está aprovado\n")
        alunosApr++
    }else{
        escrever("\nSua media foi "+mediaTotal+", você está reprovado\n")
        alunosRep++
    }
    contador++
} while (contador<=limite);

for (let i = 0; i< arrMediaTotal.length; i++) {
    soma+= arrMediaTotal[i]
}


mediaTurma = soma/limite

escrever("\nA media geral da turma foi de "+mediaTurma);
escrever("\nTivemos " +alunosApr+" alunos aprovados")
escrever("\nE "+alunosRep+" alunos reprovados\n")






