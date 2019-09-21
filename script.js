let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];
let liczby_gracza = [];

let rodzaj_gry = '';


const wszystkieFunkcje = () => {
    // wybieramy rodzaj gry
    $('#rodzajGry > option:selected').each(function () {
        rodzaj_gry = $(this).val();
    });
    console.log(rodzaj_gry);

    // pobieramy liczby wybrane przez gracza
    $("input:checked").each(function () {
        liczby_gracza.push($(this).val());
    });
    console.log(liczby_gracza);

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
    console.log(liczby_gracza);

    // wszystkie dostepne liczby
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
    console.log(wszystkie_liczby);

    // losowanie 6 zwycięskich liczb
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
                if (e === f) {
                    liczby_trafione.push(e);
                }
            })
        })
    } else {
        liczby_chybil_trafil.forEach(e => {
            liczby_wylosowane_dzis.forEach(f => {
                if (e === f) {
                    liczby_trafione.push(e);
                }
            })
        })
    }
    console.log(liczby_trafione);

    // renderowanie wyników
    document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
    document.getElementById('UserNumbers').innerHTML = `Twoje liczby: ${liczby_gracza}`;
    document.getElementById('liczbyChybiłTrafił').innerHTML = `Liczby chybił trafił: ${liczby_chybil_trafil}`;
    document.getElementById('liczbyWylosowaneDzis').innerHTML = `Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`;
    document.getElementById('liczbyTrafione').innerHTML = `Liczby trafione: ${liczby_trafione}`;
    document.getElementById('iloscLiczbTrafionych').innerHTML = `Ilość liczb trafionych: ${liczby_trafione.length}`;

    // wyczyszczenie zmiennych
    liczby_chybil_trafil = [];
    liczby_wylosowane_dzis = [];
    liczby_trafione = [];
    liczby_gracza = [];
};


// const losowanieLiczbWybranejGry = () => {
//     if (rodzaj_gry === 'duzyMottek') {
//         losowanie_wszystkich_liczb(40);
//     }
//     if (rodzaj_gry === 'malyMottek') {
//         losowanie_wszystkich_liczb(30);
//     }
// };


// const reset = () => {
//     liczby_chybil_trafil = [];
//     liczby_wylosowane_dzis = [];
//     liczby_trafione = [];
// };
//
// const wszystkieFunkcje = () => {
//     wyborGry();
//     console.log(`Rodzaj gry ${rodzaj_gry}`);
//     getUserValue();
//     console.log(`Liczby gracza ${liczby_gracza}`);
//     userOrRandomNumbers();
//     console.log(`Liczby chybił tarfił ${liczby_chybil_trafil}`);
//     losowanie(liczby_wylosowane_dzis, 6);
//     console.log(`Liczby wylosowane ${liczby_wylosowane_dzis}`);
//     sprawdzenie_trafien();
//     if (liczby_trafione.length === 3) {
//         clearInterval(ciagleLosowanie);
//         // clearInterval(czas);
//         timeEnd();
//         timeCurrentLos(timeStart);
//         iloscLosowan();
//         document.getElementById('iloscLosowan2').innerHTML = `Ilość odbytych losowań to: ${iloscLosowan2}`;
//     }
//     timeEnd();
//     timeCurrentLos(timeStart);
//     renderowanie();
//     reset();
//     liczby_gracza = [];
// };

// console.log(`Wszystkie liczby: ${wszystkie_liczby}`);
// console.log(`Liczby chybił trafił: ${liczby_chybil_trafil}`);
// console.log(`Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`);
// console.log(`Liczby trafione: ${liczby_trafione}`);
// console.log(`Ilość liczb trafionych: ${liczby_trafione.length}`);

// let ciagleLosowanie = window.setInterval(function () {
//     wszystkieFunkcje();
//     iloscLosowan2++;
//     console.log(iloscLosowan2);
// }, 1000);










