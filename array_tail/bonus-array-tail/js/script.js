//creo l'array vuoto
let array=[];

//chiedo al utente quuanti elementi vuole inserire nel array
let numeroElementi= parseInt(prompt("quanti elementi vuoi inserire?"));
console.log(numeroElementi);

// eseguo un ciclo in cui inserisco nel array numeri random per quanti mi ha indicato l'utente
for(i=0; i<numeroElementi; i++){
    array.push(Math.floor((Math.random() * 100) + 1))
    
}
console.log(array)

//chiedo al utente quanti numeri vuole stampare a partire dal ultimo
let numeroStampe= parseInt(prompt("quanti elementi vuoi stampare a parire dal ultimo?"));

/* controllo che il numero di stampe sia minore dei numeri inseriti */
if(numeroElementi>= numeroStampe){
    
    for(i=numeroElementi-numeroStampe; i<numeroElementi; i=i+1){  
    console.log(array[i]); 
    }
}

else{
    console.log(`hai creato meno di ${numeroStampe} numeri ${array}`)
}
