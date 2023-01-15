
// Bu kod, num değişkenine atanmış olan sayının tek mi çift mi olduğunu kontrol eder ve sonucu "Çift" veya "Tek" olarak ekrana yazdırır. Ternary deyim ( ? : ) kullanılarak yapılmıştır.
// let num = 5; 
// let result = (num % 2 == 0) ? "Çift" : "Tek";
// console.log(result);


// function yöntemi kullanilarak yaplmistir.
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//       console.log(num + " is even.");
//     } else {
//       console.log(num + " is odd.");
//     }
//   }
  
//   checkEvenOdd(2);  // Output: 2 is even.
//   checkEvenOdd(3);  // Output: 3 is odd.



//   parseInt() metodu, kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür. 

let number = parseInt(prompt("Enter a number: "));

while (number !== 0) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
    number = parseInt(prompt("Enter a number: "));
}
console.log("Goodbye!");