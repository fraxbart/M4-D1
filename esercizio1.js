/* esercizio 1 

Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.

function sum(a,b){
    var a;
    var b;
    const somma=a+b;

    if(a==b){
        var somma1=somma*3
        return somma1;
    }else{
        return somma;
    }

}
 
console.log(sum(10,10)); */

/* esercizio 2
 
Crea una funzione che controlli sue numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50 

function controllo(a,b){
    var a;
    var b;

    if(a==50 || b==50 || a+b==50){
        return true;
    }
    else{
        return false;
    }

}

console.log(controllo(50,2)); */

/* esercizio 3 

Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata


function rimuovicarattere(stringa,posizione){
    var inizio=0;
    var fine=1;
    return stringa.slice(inizio,posizione)+stringa.slice(posizione+fine);

}
console.log(rimuovicarattere("ciao",3)); */

/* esercizio 4

Crea una funzione che ritorni il valore più alto tra tre numeri interi.



function massimo(a,b,c){
    var a;
    var b;
    var c;
    var massimo=0;

    if(a>b && a>c){
        massimo=a;
        return massimo;
    }
    else if(b>a && b>c){
        massimo=b;
        return massimo;
    }
    else if(c>a && c>b){
        massimo=c;
        return massimo;
    }

}
console.log(massimo(1,2,3)); */


/* esercizio 5

Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.



function valori(a, b) {
    
    var a;
    var b;
    if((a>=40 && a<=60) || (a>=70 && a<=100)){
        if((b>=40 && b<=60) || (b>=70 && b<=100)){
            return true;
        }
    }
    else{
        return false;
    }

  }

console.log(valori(50,200000));  */


/* esercizio 6 

Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri. 

function ripetistringa(stringa,numero){

    if(numero<1){
        return  "";
    }else{
        var prova="";
        var i=0;
        for(i=0;i<numero;i++){
            prova+=stringa;
        }
        return prova;
    }

}

console.log(ripetistringa("ciao",5)); */

/* esercizio 7 

Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`. 



function nomecity(stringa){
    
    if(stringa.startsWith("Los") || stringa.startsWith("New")){
        return true;
    }else{
        return false;
    }

}
console.log(nomecity("Los Angeles"));  */



/* esercizio 8 

Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro 


function sumarray(array){
    var contatore=0;
    var i=0;
    for(i=0;i<array.length;i++){
        contatore++;   
    }
    if(contatore!=3){
        return "numero elementi non sufficente";
    }
    else{
        var somma=0;
        var j=0;
        for(j=0;j<array.length;j++){
            somma=somma+array[j];
        }
        return somma;
    }

}
console.log(sumarray([1, 2])); */


/* esercizio 9 

Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`. 

function checkarray(array){

    var i=0;
    for(i=0;i<array.length;i++){
        if(array[i] == 1 || array[i]== 3){
            return true;
        }else{
            return false;
        }
    }

}

console.log(checkarray([5, 2]));
*/

/* esercizio 10 

Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`

function checkarray(array){
    var i=0;
    for(i=0; i< array.length;i++){
        if(array[i] == 1 || array[i]== 3){
            return false;
        }else{
            return true;
        }

    }

}

console.log(checkarray([5, 2]));  */


/* esercizio 11 

 Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la strtinga più lunga.



function maggstring(stringa){

    var massimo ="";
    var i=0;
    for(i=0;i<stringa.length;i++){

        if(stringa.length[i]>massimo.length){
            massimo=stringa[i];
        }

    }
    return massimo;

}
console.log(maggstring("ciaone")) */


/* esercizio 12 

Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.



function angolo(gradi){

    if (gradi < 90) {
        return "Acuto";
      } else if (gradi === 90) {
        return "Retto";
      } else if (gradi < 180) {
        return "Ottuso";
      } else if (gradi === 180) {
        return "Piatto";
      } else {
        return "Giro";
      }

}

console.log(angolo(170)) */


/* esercizio 13 

 Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.



function maxind(array){

    var maxindice=0;
    var i=0;
    for(i=0;i<array.length;i++){
        if(array[i]>array[maxindice]){
            maxindice=i;

        }

    }

    return maxindice;
}

console.log(maxind(50)); */


/* esercizio 14 

Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro



function npari(array){

    var i=0;
    var maxpari=0;
    for(i=0;i<array.length;i++){
        if(array[i]%2==0 && array[i]>maxpari){
            maxpari=array[i];
        }

    }

    return maxpari;
}

console.log(npari(10)); */



/* esercizio 15 

 Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.




function numbers(a,b){

    var a;
    var b;

    if(a>=0 && b<0){
        return true;

    }else{
        return false;
    }


}
console.log(numbers(10,-1)); */

/* esercizio 16 

Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. 
Se la stringa è più corta di tre caratteri, 
tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.



function formatostringa(stringa){

    if(stringa.length<3){
        return stringa.toUpperCase();

    }else if(stringa.length > = 3){
        return stringa.slice(0,3).toLowerCase()+stringa.slice(3).toUpperCase;

    }


}
console.log(formatostringa("ciaone")); */


/* esercizio 17 


Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.




function sumpar(a,b){

    var a;
    var b;
    var somma=0;
    somma=a+b;

    if(somma>=50 && somma <=80){
        somma=65;

    }else{
        somma=80;

    }
    return somma;

}
console.log(sumpar(1,2)); */


/* esercizio 18 
Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.



function convertNumberToString(number) {
    if (number % 3 === 0) {
      return "Diego";
    } else if (number % 5 === 0) {
      return "Riccardo";
    } else if (number % 7 === 0) {
      return "Stefano";
    } else {
      return number.toString();
    }
  }
  */


  /* esercizio 19 
Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.



function createAcronym(phrase) {
  let words = phrase.split(" ");
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return acronym;
}




  */