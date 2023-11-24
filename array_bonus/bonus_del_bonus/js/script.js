let arrayUno=[];
let arrayDue=[];

//chiedo al utente di che quanti elementi saranno composti i due array
numElArUno=parseInt(prompt("inserisci il numero di elementi del primo array (devono essere o entrambi pari o entambi dispari)"));
numElArDue=parseInt(prompt("inserisci il numero di elementi delsecondo array (devono essere o entrambi pari o entambi dispari)"));


// creo i due cicli in cui faccio caricare al utente gli elementi del primo e del secondo array
for(i=0; i<numElArUno; i++){
    arrayUno.push(parseInt(prompt(`inserisci l ${i+1} di ${numElArUno} del primo array"`)))
}
for(i=0; i<numElArDue; i++){
    arrayUno.push(parseInt(prompt(`inserisci l ${i+1} di ${numElArDue} del secondo array"`)))
}

let lunghezzamodificataArUno="";
let lunghezzamodificataArDue="";
/* verifico quale dei due array + più grande del alto */
if(numElArUno >= numElArDue){

    /* se il primo è piu grande allora creo un ciclo in cui efftuero gli spostamenti 
    da un array al altro */
    for(i=0; i<numElArUno; i++){

        lunghezzamodificataArUno=arrayUno.length;
        lunghezzamodificataArDue=arrayDue.length;
    
        if(numElArUno > numElArDue){
             arrayDue.push(arrayUno.slice(0,1).join());
             console.log(arrayDue);
    
             arrayUno.shift();
             console.log(arrayUno);
    
        }

        else if(numElArUno < numElArDue){
            arrayUno.push(arrayDue.slice(0,1).join());
            console.log(arrayUno);
    
            arrayDue.shift();
            console.log(arrayDue);
         
        } 
        else{
            console.log("i due array adesso hannno la stessa lunghezza");
        }
        
    }

}

else{
    if(numElArUno < numElArDue){
        for(i=0; i<numElArDue; i++){
    
            lunghezzamodificataArUno=arrayUno.length;
            lunghezzamodificataArDue=arrayDue.length;
        
            if(numElArUno > numElArDue){
                 arrayDue.push(arrayUno.slice(0,1).join());
                console.log(arrayDue);
        
                arrayUno.shift();
                 console.log(arrayUno);
        
            }
            else if(numElArUno < numElArDue){
                arrayUno.push(arrayDue.slice(0,1).join());
                console.log(arrayUno);
        
                arrayDue.shift();
                console.log(arrayDue);
             
            } 
            else{
                console.log("i due array hannno la stessa lunghezza");
            }
        }
    
    }
    
}

if(lunghezzamodificataArDue != lunghezzamodificataArUno){
    alert("Ti avevo detto di metterle entrambe pari o entrambe dispari, non potranno mai essere della stessa lughezza in questo modo")

}

