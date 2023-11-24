//creo i primi due array
let arrayUno=['ciccio','marco','franco','luigi'];
let arrayDue=[1,2,3,4,5,6,7,8,9,10];

// ricavo il nunero di elementi di entrambi gli array
let elementiArrayUno=arrayUno.length;
let elementiArrayDue=arrayDue.length;

// creo un ciclo for che mi aggiunga elementi fino a quando non saranno della stessa lunghezza  
for(i=0; i<elementiArrayDue; i++){
    
    //ricalcolo la lunghezza in quanto ad opgni ciclata se ne aggiunmge 1
    let elementiArrayUno=arrayUno.length;

    /* se il secondo è maggiore allora ne aggiugno 1ìuno  */
    if( elementiArrayDue > elementiArrayUno ){
        arrayUno.push(Math.floor(Math.random()* 10) +1);
        console.log(arrayUno);    
    } 
        
}

console.log("i due array adesso hannno la stessa lunghezza");
