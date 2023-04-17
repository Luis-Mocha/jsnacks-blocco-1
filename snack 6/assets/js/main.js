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