const {
    ler,
    escrever
} = require('./utils/utils');



let contador = 0;

do {
    if (contador % 2 == 0 && contador % 3 == 0) {
        escrever("O número "+contador+" é par e multiplo de 3")
    }else if (contador %2 == 0) {
        escrever("O número "+contador+" é par")
    }else if (contador %3 == 0 ) {
        escrever("O número "+contador+" é multiplo de 3")
    }else{
        escrever("O numero"+contador+" não é par nem multiplo de 3")
    }
    contador++
} while (contador <= 1000);