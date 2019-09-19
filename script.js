let wszystkie_liczby = [];
let liczby_chybil_trafil = [];
let liczby_wylosowane_dzis = [];
let liczby_trafione = [];
let liczby_gracza = [];


let time = '';
let iloscLosowan2 = 0;
console.log(iloscLosowan2);

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
    czas = time * 1000;
    return document.getElementById('iloscLosowan').innerHTML = `Ilość odbytych losowań to: ${czas}`;
};

const losowanie_wszystkich_liczb = () => {
    for (let i = 1; i <= 42; i++) {
        wszystkie_liczby.push(i);
    }
};

losowanie_wszystkich_liczb();

const getUserValue = () => {
    $("input:checkbox:checked").each(function () {
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

const sprawdzenie_trafien = () => {
    liczby_chybil_trafil.forEach(e => {
        liczby_wylosowane_dzis.forEach(f => {
            if (e === f) {
                liczby_trafione.push(e);
            }
        })
    })
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
    getUserValue();
    console.log(liczby_gracza);
    losowanie(liczby_chybil_trafil, 6);
    losowanie(liczby_wylosowane_dzis, 6);
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










