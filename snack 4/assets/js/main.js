// let somma = 0;

// for (let i = 0; i < 10; i++) {

//     let number  = parseInt(prompt('scrivi un numero'));

//     somma += number 

//     console.log( number) 
// }

// console.log(somma)

myArray = []

for (let i = 0; i < 6; i++) {
    let number  = parseInt(prompt('scrivi un numero'));

    console.log(number)

    if (number % 2 != 0) {
        myArray.push(number)
    }
}

console.log(myArray)