const wszystkie_liczby = [];
const liczby_chybil_trafil = [];
const liczby_wylosowane_dzis = [];
const liczby_trafione = [];

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
};

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

losowanie_wszystkich_liczb();
losowanie(liczby_chybil_trafil, 3);
losowanie(liczby_wylosowane_dzis, 3);
sprawdzenie_trafien();


console.log(`Wszystkie liczby: ${wszystkie_liczby}`);
console.log(`Liczby chybił trafił: ${liczby_chybil_trafil}`);
console.log(`Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`);
console.log(`Liczby trafione: ${liczby_trafione}`);
console.log(`Ilość liczb trafionych: ${liczby_trafione.length}`);

document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
document.getElementById('liczbyChybiłTrafił').innerHTML = `Liczby chybił trafił: ${liczby_chybil_trafil}`;
document.getElementById('liczbyWylosowaneDzis').innerHTML = `Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`;
document.getElementById('liczbyTrafione').innerHTML = `Liczby trafione: ${liczby_trafione}`;
document.getElementById('iloscLiczbTrafionych').innerHTML = `Ilość liczb trafionych: ${liczby_trafione.length}`;





