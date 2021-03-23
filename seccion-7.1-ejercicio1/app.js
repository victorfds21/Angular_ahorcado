
let libras = 160;

let kilos =  libras / 2.2046;

// para que me de dos decimales

kilos *= 100;
kilos =Math.round(kilos);
kilos /= 100;

console.log(kilos);