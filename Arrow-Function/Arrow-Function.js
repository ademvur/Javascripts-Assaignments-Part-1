// Kare alma fonksiyonu
const kareAl = (x) => {
    return x * x;
}

// Küp alma fonksiyonu
const kupAl = (x) => {
    return x * x * x;
}

// Üs alma fonksiyonu
const usAl = (x, y) => {
    return Math.pow(x, y);
}

// not: JavaScript 'te bir sayının üssünü (kuvvetini) almak için Math.pow() fonksiyonu kullanılır.

console.log(kareAl(5)); //25
console.log(kupAl(5)); //125
console.log(usAl(5,3)); //125