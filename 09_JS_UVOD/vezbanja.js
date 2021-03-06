"use strict"; // mora pravilno da se kuca JS kod :)
//zadatak1

// Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + "minuta");

let doPonoci = 24 * 60 - odPonoci;
// let doPonoci = 24*60 - s*60 - m;
// let doPonoci = (24-s)*60 - m;
console.log("Do ponoci je ostalo: " + doPonoci + " minuta");

// Zadatak2

// Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

let minOdPonoci = 909; // 921 = 15*60 + 21
// minOdPonoci = ___ * 60 + minSada
// minOdPonoci - minSada = ___ * 60
// (minOdPonoci - minSada) / 60 = ___

// Prvi nacin
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

// Drugi nacin
// Math.floor() //uzima se prvi manji ceo broj
// Math.ceil () //uzima se prvi veci ceo broj
// console.log(Math.floor(minOdPonoci / 60));
// console.log(Math.ceil(minOdPonoci / 60));
// console.log(Math.round(minOdPonoci / 60));

let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);

// zadatak3

// Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara.");

//zadatak 4 i 5

// 4) Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
// 5) Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.


// const datum = new Date();
// let tSat = datum.getHours();
// let tMin = datum.getMinutes();

//zadatak 6

// Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.

let evriKojePosedujemo = 200;
let trenutniKurs = 117.5782;

//razmena evra u dinare
let evroUdin = evriKojePosedujemo * trenutniKurs;
console.log(evriKojePosedujemo + " evra je " + evroUdin + " dinara.");

//razmena dinara u evre
let dinKojePosedujemo = 10000;
let dinUevro = (dinKojePosedujemo / trenutniKurs).toFixed(2);
console.log(dinKojePosedujemo + " dinara je " + dinUevro + "evra.");

//zadatak 7

// Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

let evriKojePosedujemo2 = 200;
let kursEuRSD = 117.5782;
let kursUSDuRSD = 104.7281;

//razmena evra u dolare
let dolKojePosedujemo = (evriKojePosedujemo2 * kursEuRSD / kursUSDuRSD).toFixed(2);
console.log(evriKojePosedujemo2 + " evra je " + dolKojePosedujemo + " dolara");

//razmena dolara u evre
let dolKojePosedujemo2 = 840;
let evriKojePosedujemo3 = (dolKojePosedujemo2 * kursUSDuRSD / kursEuRSD).toFixed(2);
console.log(dolKojePosedujemo2 + " dolara je " + evriKojePosedujemo3 + " evra");

//zadatak 8

//Celzijusi u Farenhajte
let tempCelz = 35;
let tempFar = Math.round(tempCelz * 1.8 + 32);
console.log(tempCelz + " Celzijusa je " + tempFar + " Farenhajta");

//Farenhajti u Celzijuse
let tempFar2 = 78;
let tempCelz2 = Math.round((tempFar2 - 32) / 1.8);
console.log(tempFar2 + " Farenhajta je " + tempCelz2 + " Celzijusa");

//zadatak 9

//Celzijusi u Kelvine
let tempCelz3 = 19;
let tempKelv = tempCelz3 + 273.15;
console.log(tempCelz3 + " Celzijusa je " + tempKelv + " Kelvina");

//Kelvini u Celzijuse
let tempKelv2 = 300;
let tempCelz4 = (tempKelv2 - 273.15).toFixed(2);
console.log(tempKelv2 + " Kelvina je " + tempCelz4 + " Celzijusa");