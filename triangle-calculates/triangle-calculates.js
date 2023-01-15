// taban ve yükseklik olmak üzere iki parametreyi alan ve (taban * yükseklik) / 2 formülünü kullanarak bir üçgenin alanını hesaplayan bir üçgen Alan işlevi tanımlar. 
// Ayrica "Geçersiz giriş uyarisi olarak" taban ve yükseklik pozitif sayılar olmasi uyarisi kullanicidan istennecektir.




function triangleArea(base, height) {
    return (base * height) / 2;
  }
  
  const base = 5;
  const height = 7;
  const area = triangleArea(base, height);
  
  if (area < 0) {
    console.log("Invalid input: base and height must be positive numbers.");
  } else {
    console.log(`The area of a triangle with base ${base} and height ${height} is ${area}.`);
  }
  