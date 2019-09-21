let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];
let liczby_gracza = [];
let rodzaj_gry = '';

let time = '';
let iloscLosowan2 = 0;

const timeStart = new Date();

const timeEnd = () => {
    const time = new Date();
};

const timeCurrentLos = (timeStart) => {
    const timeEnd = new Date();
    let different = (timeEnd - timeStart) / 1000;
    time = different;
    return document.getElementById('czasLosowania').innerHTML = `Czas trwania skryptu to: ${different.toFixed(2)} sukund`;
    // console.log(`Czas trwania skryptu to: ${different.toFixed(2)} sukund`);
};

const iloscLosowan = () => {
    czas = time * 1;
    return document.getElementById('iloscLosowan').innerHTML = `Ilość odbytych losowań to: ${czas}`;
};

const losowanie_wszystkich_liczb = (howManyNumber) => {
    for (let i = 1; i <= howManyNumber; i++) {
        wszystkie_liczby.push(i);
    }
};

const losowanieLiczbWybranejGry = () => {
    if (rodzaj_gry === 'duzyMottek') {
        losowanie_wszystkich_liczb(40);
    }
    if (rodzaj_gry === 'malyMottek') {
        losowanie_wszystkich_liczb(30);
    }
};

losowanieLiczbWybranejGry();

const wyborGry = () => {
    $('#rodzajGry > option:selected').each(function () {
        rodzaj_gry = $(this).val();
    });
};

const getUserValue = () => {
    $("input:checked").each(function () {
        liczby_gracza.push($(this).val());
    });
};

const losowanie = (los, ilosc) => {
    while (los.length < ilosc) {
        let wylosowanaLiczba = Math.floor(Math.random() * wszystkie_liczby.length + 1);
        if (los.includes(wylosowanaLiczba) === false) {
            los.push(wylosowanaLiczba);
        }
    }
    los.sort(function (a, b) {
        return a - b
    });
};

const userOrRandomNumbers = () => {
    if (liczby_gracza.length === 0) {
        losowanie(liczby_chybil_trafil, 6);
    }
};

const sprawdzenie_trafien = () => {
    console.log(liczby_gracza.length);
    console.log(liczby_chybil_trafil.length);
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
};

const renderowanie = () => {
    document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
    document.getElementById('UserNumbers').innerHTML = `Twoje liczby: ${liczby_gracza}`;
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
    wyborGry();
    console.log(`Rodzaj gry ${rodzaj_gry}`);
    getUserValue();
    console.log(`Liczby gracza ${liczby_gracza}`);
    userOrRandomNumbers();
    console.log(`Liczby chybił tarfił ${liczby_chybil_trafil}`);
    losowanie(liczby_wylosowane_dzis, 6);
    console.log(`Liczby wylosowane ${liczby_wylosowane_dzis}`);
    sprawdzenie_trafien();
    if (liczby_trafione.length === 3) {
        clearInterval(ciagleLosowanie);
        // clearInterval(czas);
        timeEnd();
        timeCurrentLos(timeStart);
        iloscLosowan();
        document.getElementById('iloscLosowan2').innerHTML = `Ilość odbytych losowań to: ${iloscLosowan2}`;
    }
    timeEnd();
    timeCurrentLos(timeStart);
    renderowanie();
    reset();
    liczby_gracza = [];
};

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










