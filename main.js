// 1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. 
// Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore. 
// Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.


// const stringaJ = '{"key": "value"}';

// const safeParseJSON = (stringa) => {

//     try {

//         const stringaJSON = JSON.parse(stringa);
//         console.log(`L'analisi è stata un successo!`, stringaJSON);

//         return stringaJSON;

//     } catch (errore) {

//         console.error(`Errore durante l'analisi!`, errore.message);
ù
//         return null;
//     }

// };

// const analisi = safeParseJSON(stringaJ);



// 2. Crea una funzione chiamata logElements che prende un array e stampa in console 
// ogni elemento utilizzando il metodo .forEach().


// const listaPietre = ["Ossidiana", "Lapislazzuli", "Ametista"];

// window.addEventListener('load', () => {

//     listaPietre.forEach((elem) => {
//         console.log(elem);
//     });

// });



// 3. Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. 
// Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero". 
// Altrimenti, restituisci il risultato della divisione.

// const divide = (dividendo, divisore) => {
//     try {

//         if (divisore === 0) {
//             throw new Error("Impossibile dividere per zero");
//         } else {
//             return dividendo / divisore;
//         }

//     } catch (error) {
//         console.error(error.message);
//         console.log(`Errore!`)
//     }
// }

// const risultato = divide(16, 10);
// console.log("Risultato della divisione:", risultato);



// 4. Scrivi una funzione processNumbers che prende un array, 
// convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato. 
// Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.


// const numeri = [1, 6, "quattro", 8];

// const processNumbers = (array) => {

//     const nuovoArray = [];

//     try {
//         array.forEach((elem, i) => {

//             if (typeof elem !== 'number') {
//                 throw new Error(`Il valore non numerico si trova all'indice ${i}`);
//             }

//             nuovoArray.push(elem ** 2);

//         });

//     } catch (error) {
//         console.error(error.message);

//         return null;
//     }

//     return nuovoArray;
// };


// const numeriAlQuadrato = processNumbers(numeri);



// 5. Scrivi una funzione mapWithIndex che prende un array e restituisce un nuovo array in cui ogni elemento è una stringa che contiene 
// l'elemento originale e il suo indice, formattato come "Elemento [indice]: [elemento]".

// const lista = ["ossidiana", "ametista", "lapislazzuli"];

// const mapWithIndex = (array) => {
//     return array.map((element, i) => `[${i}]: [${element}]`);
// };

// const risultato = mapWithIndex(lista);
// console.log(risultato);



// 6. Crea una funzione removeShortWords che prende un array di stringhe e una lunghezza minima. 
// Dovrebbe restituire un nuovo array contenente solo le stringhe che sono più lunghe della lunghezza minima. 
// Usa .filter() e assicurati che la funzione non tenga conto delle maiuscole e minuscole.


// const lista = ["ossidiana", "ametista", "lapislazzuli"];
// const lunghezzaMin = 4;

// const removeShortWords = (array, lunghezzaMin) => {
//     return array.filter((parola) => parola.length > lunghezzaMin);
// };

// const risultato = removeShortWords(lista, lunghezzaMin);
// console.log(risultato);
