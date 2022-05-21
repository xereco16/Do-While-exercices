const {
    ler,
    escrever
} = require('./utils/utils');

let altMaciel = 110
let altArthur = 150
let anos = 0
let anosDois = 0
let anosArr 
let anosTres = []


escrever("\nMaciel tem 1,10m (e cresce 10cm por ano), ja Arthur tem 1,50m (e cresce 6cm po ano)")
escrever("\nPergunto primeiro para Maciel. Em quantos anos você acha que passa Arthur?")
let tempoMaciel = Number(ler("Em quantos anos? "))
escrever("\nE em quantos anos você chegara a 1,90?")
let tempoPassarMaciel = Number(ler("Em quantos anos? "))
escrever("\nPergunto agora para Arthur. Em quantos anos você acha que Maciel te passa?")
let tempoArthur = Number(ler("Em quantos anos? "))
escrever("\nE em quantos anos você chegara a 1,90?")
let tempoPassarArthur = Number(ler("Em quantos anos? "))

do {
    altMaciel= altMaciel + 10
    altArthur= altArthur + 6 
    anos++
    if (altMaciel==190) {
        anosDois = anos
    }
    if (altArthur>=190) {
        anosTres.push(anos)
    }
    
} while (altMaciel<altArthur);

anosArr = anosTres.shift()


escrever(altArthur)
escrever(altMaciel)
escrever(anos)
escrever(anosDois)
escrever(anosArr)

if (tempoMaciel==anos && tempoArthur == anos){
    escrever("\nParabens vocês dois acertaram em quanto tempo Maciel passaria Arthur, "+anos+" anos")
}else if(tempoMaciel == anos){
    escrever("\nParabens Maciel você acertou em quanto tempo você passaria Arthur, "+anos+" anos")
}else if(tempoArthur == anos){
    escrever("\nParabens Arthur você acertou em quanto tempo Maciel passaria você, "+anos+" anos")
}


if(tempoPassarMaciel==anosDois && tempoPassarArthur==anosArr){
    escrever("\nParabens vocês dois acertaram em quanto tempo passariam de 1,90m, "+anosDois+" anos para Maciel, e "+anosArr+" anos para arthur")
}else if(tempoPassarMaciel==anosDois){
    escrever("\nParabens Maciel você acertou em quanto tempo passaria de 1,90m, "+anosDois+" anos")
}else if(tempoPassarArthur==anosArr){
    escrever("\nParabens Arthur você acertou em quanto tempo passaria de 1,90m, "+anosArr+" anos")
}

if(tempoMaciel!=anos && tempoArthur!=anos && tempoPassarMaciel!=anosDois && tempoPassarArthur!=anosArr){
    escrever("\nVocês erraram todas as suas apostas =)")
    escrever("\nMaciel passaria Arthur em "+anos+" anos, Maciel demoraria "+anosDois+" anos para chegar a 1,90m, e Arthur demoraria "+anosArr+" anos")
}
    


