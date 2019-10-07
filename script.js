let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];
let liczby_gracza = [];

let rodzaj_gry = '';

// losowanie liczb
const losowanie_wszystkich_liczb = (ileLiczb) => {
    for (let i = 1; i <= ileLiczb; i++) {
        wszystkie_liczby.push(i);
    }
};

// sprawdzanie wybranej gry
const losowanieLiczbWybranejGry = () => {
    if (rodzaj_gry === 'duzyMottek') {
        losowanie_wszystkich_liczb(40);
    }
    if (rodzaj_gry === 'malyMottek') {
        losowanie_wszystkich_liczb(30);
    }
};

const wszystkieFunkcje = () => {
    // wybieramy rodzaj gry
    $('#rodzajGry > option:selected').each(function () {
        rodzaj_gry = $(this).val();
    });

    losowanieLiczbWybranejGry();

    // pobieramy liczby wybrane przez gracza
    $("input:checked").each(function () {
        liczby_gracza.push($(this).val());
    });

    // jeśli jakieś wybrał lub nie to:
    if (liczby_gracza.length === 0) {
        while (liczby_chybil_trafil.length < 6) {
            let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
            if (liczby_chybil_trafil.includes(wylosowanaLiczba) === false) {
                liczby_chybil_trafil.push(wylosowanaLiczba);
            }
        }
        liczby_chybil_trafil.sort(function (a, b) {
            return a - b
        });
    }
    
    while (liczby_wylosowane_dzis.length < 6) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if (liczby_wylosowane_dzis.includes(wylosowanaLiczba) === false) {
            liczby_wylosowane_dzis.push(wylosowanaLiczba);
        }
    }
    liczby_wylosowane_dzis.sort(function (a, b) {
        return a - b
    });

    // sprawdzenie trafień
    if (liczby_gracza.length > 0) {
        liczby_gracza.forEach(e => {
            liczby_wylosowane_dzis.forEach(f => {
                if (e == f) {
                    liczby_trafione.push(e);
                }
            })
        });
     } 
    else {
        liczby_chybil_trafil.forEach(g => {
            liczby_wylosowane_dzis.forEach(h => {
                if (g === h) {
                    liczby_trafione.push(g);
                }
            })
        })
    }

    // renderowanie wyników
    document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
    document.getElementById('UserNumbers').innerHTML = `Twoje liczby: ${liczby_gracza}`;
    document.getElementById('liczbyChybiłTrafił').innerHTML = `Liczby chybił trafił: ${liczby_chybil_trafil}`;
    document.getElementById('liczbyWylosowaneDzis').innerHTML = `Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`;
    document.getElementById('liczbyTrafione').innerHTML = `Liczby trafione: ${liczby_trafione}`;
    document.getElementById('iloscLiczbTrafionych').innerHTML = `Ilość liczb trafionych: ${liczby_trafione.length}`;
    
    // wyczyszczenie zmiennych
    wszystkie_liczby = [];
    liczby_chybil_trafil = [];
    liczby_wylosowane_dzis = [];
    liczby_trafione = [];
    liczby_gracza = [];
};
