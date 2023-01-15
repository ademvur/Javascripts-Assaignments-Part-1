// Bu program kullanıcıdan dönüştürmek istediği birimi (Fahrenheit için Celsius'a veya 'C' Celsius'tan Fahrenheit'a) ve dönüştürmek istediği sıcaklığı girmesini ister.
// Ardından, girilen birimi kontrol etmek için bir if-else ifadesi kullanır ve aşağıdaki formülleri kullanarak uygun dönüştürmeyi gerçekleştirir:
// C = (F - 32) x (5/9) ve
// F = (C x (9/5)) + 32

// Sonuç daha sonra konsolda yazdırılır. Geçersiz bir birim girilirse, program "Geçersiz birim girildi. Lütfen 'F' veya 'C' girin." uyarisi verir.




let unit = prompt("Enter 'F' to convert from Fahrenheit to Celsius or 'C' to convert from Celsius to Fahrenheit:");
let temp = parseFloat(prompt("Enter the temperature: "));

if (unit === "F") {
    let celsius = (temp - 32) * (5 / 9);
    console.log(temp + " degrees Fahrenheit is equal to " + celsius + " degrees Celsius.");
} else if (unit === "C") {
    let fahrenheit = (temp * (9 / 5)) + 32;
    console.log(temp + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
} else {
    console.log("Invalid unit entered. Please enter 'F' or 'C'.");
}


// not : yujarida ""parseFloat() metodu ""kulallanilmistir. kendisine parametre olarak verilen değerlere göre verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür. Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur. Girilen değerin veri türü ne olursa olsun number veri türüne dönüşür. Ancak girilen değer kabul ettiği değerler haricinde olursa NaN sonucunu verir.