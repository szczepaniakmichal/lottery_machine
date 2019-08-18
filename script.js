const wszystkie_liczby = [];
const liczby_chybil_trafil = [];
const liczby_szczesliwe = [];
const liczby_trafione = [];

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
}

const losowanie = (los, ilosc) => {
    while ( los.length < ilosc ) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if ( los.includes(wylosowanaLiczba) == false ) {
            los.push(wylosowanaLiczba);
        }  
    }
    los.sort( function( a, b ) { return a - b } );
}

const sprawdzenie_trafien = () => {
    liczby_chybil_trafil.forEach(e => {
        liczby_szczesliwe.forEach(f => {
            if( e == f ) {
                liczby_trafione.push(e);
            }
        })  
    })
}

losowanie_wszystkich_liczb();
losowanie(liczby_chybil_trafil, 6);
losowanie(liczby_szczesliwe, 6);
sprawdzenie_trafien();


console.log(`Wszystkie liczby: ${wszystkie_liczby}`);
console.log(`Liczby chybił trafił: ${liczby_chybil_trafil}`);
console.log(`Liczby wylosowane dziś: ${liczby_szczesliwe}`);
console.log(`Liczby trafione: ${liczby_trafione}`);
console.log(`Ilość liczb trafionych: ${liczby_trafione.length}`);



