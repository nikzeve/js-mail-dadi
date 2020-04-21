// "Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

var email = ["pippo@boolean.it", "plata@boolean.it", "plomo@boolean.it", "topolino@boolean", "paperino@boolean.it", "minnie@boolean.it", "pluto@boolean.it", "pablo@boolean.it"];

console.log('Elementi presenti nel array:' + ' ' + email.length);


var email_utente = prompt('Inserisci la tua email.')
console.log(email_utente);

for (var i = 0; i < email.length; i++) {
    if (email_utente == email[i]) {
        console.log('La tua mail è presente nella lista, puoi accedere.');
    } else if (i == email.length && email_utente != email[7]) {
        console.log('vkjevkvjekvej');
    }
}



    // console.log('La tua mail non è presente nella lista, non puoi accedere');
