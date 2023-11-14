
'use strict'

// 1. Chiedo all’utente di sceglie pari o dispari e salvo in una variabile

let sceltaUtente = prompt('Scegli pai o dispari');

if (sceltaUtente === 'pari') {
    sceltaUtente = true;
    console.log('Hai scelto pari');
}
else {
    sceltaUtente = false;
    console.log('Hai scelto dispari');
}

// 2. Chiedo all’utente di inserire un numero da 1 a 5 e salvo in una variabile

const numeroUtente = Number(prompt('Inserisci un numero'));

console.log(`Numero utente: ${numeroUtente}`);

// 3. Realizzo funzione per generare numero random da 1 a 5 per il computer e salvo in una variabile

function numeroRandom() {
    const risultato = Math.floor((Math.random() * 5) + 1);
    return risultato;
}

const numeroComputer = numeroRandom();
console.log(`Numero computer: ${numeroComputer}`);

// 4. Sommo i due numeri

let somma = numeroUtente + numeroComputer;
console.log(`somma: ${somma}`);

// 5. Realizzo funzione per stabilire se la somma dei due numeri è pari o dispari

function pariDispari(somma) {

    if (somma % 2 === 0) {
        return true;
    }
    return false;
}

// 6. Dichiariamo chi ha vinto, se la scelta iniziale di pari o dispari dell'utente corrisponde con il risultato, allora l'utente vince altrimenti vince il computer 

if (sceltaUtente === pariDispari(somma)) {
    console.log('Utente vice');
}
else {
    console.log('Computer vince');
}
