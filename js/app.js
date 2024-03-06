//Scrivere un programma che stampi in console i numeri da 1 a 100
//--Scrivo la costante per il numero di volte che devo stampare
let n = 100
//--Scrivo il ciclo for 
for (let i= 0; i < n; i++) {
    let num = i + 1
    //console.log(num);

    //scrivo le variabili per identificare quali siano i numeri multipli di 3 e di 5 
    const multiplo3 = num % 3
    const multiplo5 = num % 5

    //----creo un container nel dom 
    //------seleziono il mio container dal dom 
    const chess = document.querySelector('.chess') //object
    
    //--Se sono multipli sia di 3 che di 5 stampo "FizzBuzz" al posto del num
    if (multiplo3 === 0 && multiplo5 === 0) {
        
        console.log("FizzBuzz")

        //----aggiungo un elemento html con il numero corretto dentro l'elemento
        const cell = `<div class="square flex align-items-center blue"><p>${"FizzBuzz"}</p></div>`
        chess.innerHTML += cell

        //--Se sono multipli di 3 stampo "Fizz" al posto del num
    } else if (multiplo3 === 0) {   
        console.log("Fizz");

        //----aggiungo un elemento html con il numero corretto dentro l'elemento
        const cell = `<div class="square flex align-items-center red"><p>${"Fizz"}</p></div>`
        chess.innerHTML += cell

        //--Se sono multipli di 5 stampo "Buzz" al posto del num
    } else if (multiplo5 === 0) {
        console.log("Buzz");

        //----aggiungo un elemento html con il numero corretto dentro l'elemento
        const cell = `<div class="square flex align-items-center yellow"><p>${"Buzz"}</p></div>`
        chess.innerHTML += cell

        //--Se no stampo il numero
    } else {
        console.log(num)

        //----aggiungo un elemento html con il numero corretto dentro l'elemento
        const cell = `<div class="square flex align-items-center white"><p>${num}</p></div>`
        chess.innerHTML += cell
        
    }
}

