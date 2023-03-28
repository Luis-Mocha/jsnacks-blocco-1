let firstWord = prompt('1) Inserisci la prima parola');
let secondWord = prompt('2) inserisci la seconda parola');




if (firstWord.length > secondWord.length) {
    console.log('la prima parola vince:' + firstWord)
} 
else if (firstWord.length < secondWord.length) {
    console.log('La seconda parola è più lunga: ' + secondWord)
}
else {
    console.log('Le due parole hanno la stessa lunghezza')
}