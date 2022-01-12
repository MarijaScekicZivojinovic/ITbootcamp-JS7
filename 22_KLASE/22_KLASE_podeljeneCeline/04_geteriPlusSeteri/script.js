import Auto from "./auto.js"

let a1 = new Auto("Citroen C4", "crna", false);
// kao da je let a1 = Auto.constructor() ali se NIKAD ne pise ovako
// a1 je objekat koji ima sledeca polja:
// a1._marka -> vrednost ovog polja je "Citroen C4"
// a1._boja -> vrednost ovog polja je "crna"
// a1._imaKrov -> vrednost ovog polja je false
console.log(a1);
console.log(typeof a1); //objekat, tj preciznije objekat klase Auto

let a2 = new Auto("Skoda Octavia", "plava", true);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "bela", false); //stagod ne upisemo bice undefined, sem ako nema podesenu default vrednost
// let a3 = new Auto("Fiat Punto", "bela", false, false); -> ignorisace ovo sto je zadnje dodato

console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);

let a4 = new Auto("             a", undefined, false); //ostace ovaj space jer nemamo validaciju ovde, nicim ne proveravamo 
console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a4.vozi(200);

// u klasi pisemo polja  i metode
// sva polja klase se definisu u constructor
// mozemo dodavati proizvoljne metode
// svi objeti klase imace polja i metode navedene u klasi

//postoji nacin da pisemo a1._marka  a da se ponasa kao a1.postaviMarku()
//uvodimo setere i getere
//prednost je u tome sto se sa seterom i geterom uvodi validacija

a1.marka = "         Audi A4"; //seter marka
console.log(a1);
console.log(a1.marka); //geter marka -> ne ide marka() !!!


a3.stampaj();