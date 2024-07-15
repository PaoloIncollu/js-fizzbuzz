/*step

1. Impostare il range di numeri da 1 a 100 con un ciclo definito

2. Stampare in console i risultati
    - se sono multipli sia di 3 che di 5 stampa FizzBuzz
    - se sono multipli di 3 stampa Fizz
    - se sono multipli di 5 stampa Buzz
    - altrimenti stampa i numeri corrispondenti

3. Stampare i numeri o le stringhe nel DOM

*/

const myContainer = document.querySelector('.my-container');

for (let i=1; i<=100; i++){

    
    if ( i % 3 == 0 && i % 5 == 0){ //seleziona sia i multipli di tre sia quelli di 5

        console.log('FizzBuzz'); //stampa in console
        myContainer.append(' FizzBuzz '); //stampa nel dom 

    }

    else if (i % 3 == 0){ //seleziona i multipli di 3

        console.log('Fizz'); //stampa in console
        myContainer.append(' Fizz '); //stampa nel dom 

    }

    else if (i % 5 == 0){ //seleziona i multipli di 5

        console.log('Buzz'); //stampa in console
        myContainer.append(' Buzz '); //stampa nel dom 
    }

    else { //seleziona i numeri che non rispecchiano le altre caratteristiche

        console.log(i); //stampa in console
        myContainer.append( i, ' ' ); //stampa nel dom 
    }
}