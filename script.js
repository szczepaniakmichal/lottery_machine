const wszystkie_liczby = [];
const liczby_chybil_trafil = [];
const liczby_szczesliwe = [];
const liczby_trafione = [];

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
}

const chybil_trafil = () => {
    while ( liczby_chybil_trafil.length < 6 ) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if ( liczby_chybil_trafil.includes(wylosowanaLiczba) == false ) {
         liczby_chybil_trafil.push(wylosowanaLiczba);
        }  
    }
}

const szczesliwe_liczby = () => {
    while ( liczby_szczesliwe.length < 6 ) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if ( liczby_szczesliwe.includes(wylosowanaLiczba) == false ) {
            liczby_szczesliwe.push(wylosowanaLiczba);
        }
    }
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
chybil_trafil();
szczesliwe_liczby();
sprawdzenie_trafien();


console.log(wszystkie_liczby);
console.log(`Liczby chybił trafił: ${liczby_chybil_trafil}`);
console.log(`Liczby wylosowane dziś: ${liczby_szczesliwe}`);
console.log(`Liczby trafione: ${liczby_trafione}`);
console.log(`Ilość liczb trafionych: ${liczby_trafione.length}`);




