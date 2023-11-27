// creo l'array frigorifero con tutti i frutti al interno
let frigorifero=['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  ];


// aggiungo al array già creato la pesca
frigorifero.push("pesca");



// controllo tramite un ciclo se al interno del array frigorifero c'è la pesca
// se c'e stampo trovato 
let check=false;
for(let i=0; i< frigorifero.length; i++){
    if(frigorifero[i] == "cocomero"){
        check=true;
    }
}

// se nel ciclo non ho trovato il cocomero devo comprarlo
 if(check){
    console.log("Trovato! Devo solo preparare il cocktail.");
 }
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}  
