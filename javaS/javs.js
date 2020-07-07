var totKm = parseInt(prompt('Quanti km devi percorrere:'));
var passengerAge = parseInt(prompt('Quanti hanni hai:'));
const kmPrice = 0.21 ;
var ticketPrice =  totKm * kmPrice ;
var discountUnder = 20 * ticketPrice / 100;
var discountOver = 40 * ticketPrice / 100;

var finalPrice = ticketPrice ;

if (passengerAge < 18 ) {
    finalPrice = ticketPrice - discountUnder;
    document.getElementById('output').innerHTML = 'Il costo del biglietto e\' di:' + ' '+ finalPrice + '€.' + 'Hai ottenuto uno sconto di' +' '+ discountUnder + '€.';  
} else if (passengerAge >= 65) {
    finalPrice = ticketPrice - discountOver;
    document.getElementById('output').innerHTML = 'Il costo del biglietto e\' di:' + ' '+ finalPrice + '€.' + 'Hai ottenuto uno sconto di' +' '+ discountOver + '€.';  
} else {
    document.getElementById('output').innerHTML = 'Il costo del biglietto e\' di:' + ' '+ finalPrice + '€.';  
}




