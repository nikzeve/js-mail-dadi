// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

var numero_utente = prompt('Inserisci un numero da 1 a 6.')
console.log('Numero utente:' + numero_utente);

var numero_pc = Math.floor(Math.random() * 6) + 1;
console.log('Numero pc:' + numero_pc);


if (numero_utente > numero_pc) {
    console.log('Vince utente');
} else if (numero_utente < numero_pc){
    console.log('Vince il computer');
} else {
    console.log('Il numero è pari');
}
