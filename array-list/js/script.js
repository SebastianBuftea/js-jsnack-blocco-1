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
        console.log("Trovato! Devo solo preparare il cocktail.");
    }
}

// se nel ciclo nonho trovato il cocomero devo comprarlo
 if(check == false ){
    console.log("Oh no, devo uscire a comprare il cocomero!");
}  
