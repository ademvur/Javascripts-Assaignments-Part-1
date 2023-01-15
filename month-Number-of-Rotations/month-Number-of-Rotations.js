function getMonthNumber(month) {
    switch (month) {
      case "Ocak":
        return 1;
        break;
      case "Şubat":
        return 2;
        break;
      case "Mart":
        return 3;
        break;
      case "Nisan":
        return 4;
        break;
      case "Mayıs":
        return 5;
        break;
      case "Haziran":
        return 6;
        break;
      case "Temmuz":
        return 7;
        break;
      case "Ağustos":
        return 8;
        break;
      case "Eylül":
        return 9;
        break;
      case "Ekim":
        return 10;
        break;
      case "Kasım":
        return 11;
        break;
      case "Aralık":
        return 12;
        break;
      default:
        return "Geçersiz ay adı.";
    }
  }
  
  console.log(getMonthNumber("Ocak")); // 1
  console.log(getMonthNumber("Haziran")); // 6
  console.log(getMonthNumber("Mart")); // 3
  console.log(getMonthNumber("abc")); // "Geçersiz ay adı."