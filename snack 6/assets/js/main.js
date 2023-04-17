// ----- Snack 1
const bici = [
    {
        nomeBici: 'Nome Bici A',
        peso: 20
    }, {
        nomeBici: 'Nome Bici B',
        peso: 45
    }, {
        nomeBici: 'Nome Bici C',
        peso: 33
    }, {
        nomeBici: 'Nome Bici D',
        peso: 18
    }, {
        nomeBici: 'Nome Bici E',
        peso: 24
    }
];

// let biciLeggera = {nome: 'Nome Bici z', peso: 100}
let biciLeggera = bici[0]

console.log(biciLeggera)
console.log(biciLeggera.peso)



bici.forEach(element => {
    // console.log(element.peso)
    // console.log(biciLeggera.peso)

    if (element.peso < biciLeggera.peso) {
        biciLeggera = element
    }
});

const {nomeBici, peso} = biciLeggera;
console.log(`La bici più leggera si chiama ${nomeBici} e pesa ${peso} Kg.`)


// ----- Snack 2
const teams = [
    {
        nome: 'Nome Squadra A',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Nome Squadra B',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Nome Squadra C',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Nome Squadra D',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Nome Squadra E',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


console.log(teams)
let newArray = [];

teams.forEach( team => {
    team.puntiFatti = randomNumber(0, 100)
    team.falliSubiti = randomNumber(0, 100)
    const {nome, puntiFatti, falliSubiti} = team;

    newArray.push({nome, falliSubiti})
})
console.log(newArray)


// ----- random number function
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );        
};



// ----- Snack 3
let arrayNomi = ['alberto', 'michele','angelo','simone', 'laura', 'francesca'];
let min = parseInt( prompt( `Inserisci un numero compreso fra 0 e ${arrayNomi.lenght - 1}`))
let max = parseInt( prompt( `Inserisci un numero compreso fra 0 e ${arrayNomi.lenght - 1}`))

function filterFunction(array, x, y) {
    
    let arrayFiltrato = array.filter( (element, index)=> {

        if (x < index && y > index) {
            return element;
        }
    });

    return arrayFiltrato;
};

console.log(filterFunction(arrayNomi, min, max))