'use strict'

// 1. Chiedere all’utente di inserire una parola

let parolaUtente = prompt('Inserisci una parola');
console.log(`Hai inserito la parola ${parolaUtente}`);

// 2. Creare una funzione per capire se la parola inserita è palindroma

let parolaInevrtita = '';
for (let i = parolaUtente.length - 1; i >= 0; i--) {
    parolaInevrtita += parolaUtente[i];
}

console.log(`La parola invertita è: ${parolaInevrtita}`);

function palindroma() {
    if (parolaUtente === parolaInevrtita) {
        return true;
    }
    return false;
}

// 3. Stampo in console messaggio appropriato

if (palindroma() === true) {
    console.log(`La parola ${parolaUtente} è palindroma`);
}
else {
    console.log(`La parola ${parolaUtente} non è palindroma`);
}