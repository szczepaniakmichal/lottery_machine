let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
};

losowanie_wszystkich_liczb();

const losowanie = (los, ilosc) => {
    while ( los.length < ilosc ) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if ( los.includes(wylosowanaLiczba) === false ) {
            los.push(wylosowanaLiczba);
        }
    }
    los.sort( function( a, b ) { return a - b } );
};

const sprawdzenie_trafien = () => {
    liczby_chybil_trafil.forEach(e => {
        liczby_wylosowane_dzis.forEach(f => {
            if( e === f ) {
                liczby_trafione.push(e);
            }
        })
    })
};

const renderowanie = () => {
    document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
    document.getElementById('liczbyChybiłTrafił').innerHTML = `Liczby chybił trafił: ${liczby_chybil_trafil}`;
    document.getElementById('liczbyWylosowaneDzis').innerHTML = `Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`;
    document.getElementById('liczbyTrafione').innerHTML = `Liczby trafione: ${liczby_trafione}`;
    document.getElementById('iloscLiczbTrafionych').innerHTML = `Ilość liczb trafionych: ${liczby_trafione.length}`;
};

const reset = () => {
    liczby_chybil_trafil = [];
    liczby_wylosowane_dzis = [];
    liczby_trafione = [];
};

const wszystkieFunkcje = () => {
    losowanie(liczby_chybil_trafil, 6);
    losowanie(liczby_wylosowane_dzis, 6);
    sprawdzenie_trafien();
    if (liczby_trafione.length === 5) {
        clearInterval(ciagleLosowanie);
        clearInterval(czas);
    }
    renderowanie();
    reset();
};

wszystkieFunkcje();

console.log(`Wszystkie liczby: ${wszystkie_liczby}`);
console.log(`Liczby chybił trafił: ${liczby_chybil_trafil}`);
console.log(`Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`);
console.log(`Liczby trafione: ${liczby_trafione}`);
console.log(`Ilość liczb trafionych: ${liczby_trafione.length}`);

let ciagleLosowanie = window.setInterval(function () {
    wszystkieFunkcje();
},10);

let czas = window.setInterval(function () {
    console.log('hej');
}, 1000)










