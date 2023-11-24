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

//controllo che l utente abbia inserito più di 5 numeri o 5 numeri
if(numeroElementi>=5){
    for(i=numeroElementi-5; i<numeroElementi; i=i+1){
       
    console.log(array[i]); 
    }
}

else{
    console.log(`hai creato meno di 5 numeri ${array}`)
}
