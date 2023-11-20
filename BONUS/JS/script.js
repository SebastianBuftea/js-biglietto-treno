/* PRENDIAMO IN INPUT IL NUMERO DI KM E L ETA */
let numero_km= prompt("inserisci il numero di chilometri che vuoi percorrere");

let eta= prompt("inserisci la tua eta");

/* CALCOLIAMO IL PREZZO  */
let prezzo= numero_km * 0.21;

/* APPLICHIAMO LO SCONTO SE MINORENNE O SE OVER 65 */
if (eta < 18){
    prezzo = prezzo - (prezzo * 0.2);
      
}
else if(eta >= 65){
    prezzo = prezzo - prezzo * 0.6;    
}

/* SISTEMIAMO IL PREZZO CON DUE NUMERI DOPO LA VIRGOLA */
prezzo= prezzo.toFixed(2)

/* VISULIZZIAMO IL PREZZO SULLA CONSOLE */
console.log(prezzo)

document.getElementById(`prezzo_biglietto`).innerHTML=`${document.getElementById(`prezzo_biglietto`).innerHTML} ${prezzo} € `;
