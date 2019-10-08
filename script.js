let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];
let liczby_gracza = [];
let rodzaj_gry = '';
let iloscLosowan = 0;

let time = '';
let iloscLosowan2 = 0;

const timeStart = new Date();

const timeEnd = () => {
    return new Date();
};

const timeCurrentLos = (timeStart) => {
    const timeEnd = new Date();
    let different = (timeEnd - timeStart) / 1000;
    time = different;
    return document.getElementById('czasLosowania').innerHTML = `Czas trwania skryptu to: ${different.toFixed(2)} sukund`;
};

// const generatorKulek = (iterator, elId) => {
//     let el = document.createElement('div');
//     el.innerHTML = iterator;
//     el.className = 'kulka';
//     let test = document.getElementById(elId);
//     test.appendChild(el);
// };

const losowanie_wszystkich_liczb = (howManyNumber) => {
    for (let i = 1; i <= howManyNumber; i++) {
        let el = document.createElement('div');
        el.innerHTML = i;
        el.className = 'kulka';
        document.getElementById('test').appendChild(el);
        // generatorKulek(i,'test');
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
            let el = document.createElement('div');
            el.innerHTML = wylosowanaLiczba;
            el.className = 'kulka';
            document.getElementById('test2').appendChild(el);
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
    if (liczby_gracza.length > 0) {
        liczby_gracza.forEach(e => {
            liczby_wylosowane_dzis.forEach(f => {
                if (e == f) {
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

const updateIloscLosowan = () => {
    iloscLosowan++;
};

const renderowanie = () => {
    document.getElementById('wszystkieLiczby').innerHTML = `Wszystkie liczby: ${wszystkie_liczby}`;
    document.getElementById('UserNumbers').innerHTML = `Twoje liczby: ${liczby_gracza}`;
    document.getElementById('liczbyChybiłTrafił').innerHTML = `Liczby chybił trafił: ${liczby_chybil_trafil}`;
    document.getElementById('liczbyWylosowaneDzis').innerHTML = `Liczby wylosowane dziś: ${liczby_wylosowane_dzis}`;
    document.getElementById('liczbyTrafione').innerHTML = `Liczby trafione: ${liczby_trafione}`;
    document.getElementById('iloscLiczbTrafionych').innerHTML = `Ilość liczb trafionych: ${liczby_trafione.length}`;
    document.getElementById('iloscLosowan').innerHTML = `Ilość odbytych losowań to: ${iloscLosowan}`;
};

const reset = () => {
    wszystkie_liczby = [];
    liczby_chybil_trafil = [];
    liczby_wylosowane_dzis = [];
    liczby_trafione = [];
    liczby_gracza = [];
};

const wszystkieFunkcje = () => {
    wyborGry();
    losowanieLiczbWybranejGry();
    getUserValue();
    userOrRandomNumbers();
    losowanie(liczby_wylosowane_dzis, 6);
    sprawdzenie_trafien();
    timeEnd();
    timeCurrentLos(timeStart);
    updateIloscLosowan();
    renderowanie();
    reset();

};

// let ciagleLosowanie = window.setInterval(function () {
//     wszystkieFunkcje();
//     iloscLosowan2++;
//     console.log(iloscLosowan2);
// }, 1000);










