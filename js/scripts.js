/*step

1. Esercizio base

    1. Impostare il range di numeri da 1 a 100 con un ciclo definito

    2. Stampare in console i risultati
        - se sono multipli sia di 3 che di 5 stampa FizzBuzz
        - se sono multipli di 3 stampa Fizz
        - se sono multipli di 5 stampa Buzz
        - altrimenti stampa i numeri corrispondenti

    3. Stampare i numeri o le stringhe nel DOM

2. Bonus 1

    1.Aggiungere funzione append per visualizzare in pagina


3. Bonus 2

    1. Creare una row in html 

    2. Collegare la row in html a la mia costante myRow

    3. Creare delle colonne all'interno della myRow con js

*/



for (let i=1; i<=100; i++){

    const myRow = document.querySelector('.row');

    const myCol = document.createElement('div');

    myRow.append(myCol); 

    myCol.classList.add('col');

    if ( i % 3 == 0 && i % 5 == 0){ //seleziona sia i multipli di tre sia quelli di 5

        console.log('FizzBuzz'); //stampa in console
        
        myCol.append(' FizzBuzz '); // stampa nel dom

        myCol.style.backgroundColor = 'orange'; //aggiunto sfondo alle col
    }

    else if (i % 3 == 0){ //seleziona i multipli di 3

        console.log('Fizz'); //stampa in console
        
        myCol.append(' Fizz '); // stampa nel dom

        myCol.style.backgroundColor = 'yellow'; //aggiunto sfondo alle col
    }

    else if (i % 5 == 0){ //seleziona i multipli di 5

        console.log('Buzz'); //stampa in console
        
        myCol.append(' Buzz '); // stampa nel dom

        myCol.style.backgroundColor = 'green'; //aggiunto sfondo alle col
    }

    else { //seleziona i numeri che non rispecchiano le altre caratteristiche

        console.log(i); //stampa in console

        myCol.append(i, ' '); // stampa nel dom

        myCol.style.backgroundColor = 'lightblue'; //aggiunto sfondo alle col

    }
}