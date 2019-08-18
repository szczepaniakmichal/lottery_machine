const wszystkie_liczby = [];
const liczby_chybil_trafil = [];
const liczby_szczesliwe = [];
const liczby_trafione = [];

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 8; i++) {
        wszystkie_liczby.push(i);
    }
}

const chybil_trafil = () => {
    for (let i = 0; i <= 2; i++) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        liczby_chybil_trafil.push(wylosowanaLiczba);
    }

}

const szczesliwe_liczby = () => {
    for (let i = 0; i <= 2; i++) {
        let szczesliwaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        liczby_szczesliwe.push(szczesliwaLiczba);
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
console.log(liczby_chybil_trafil);
console.log(liczby_szczesliwe);
console.log(liczby_trafione);