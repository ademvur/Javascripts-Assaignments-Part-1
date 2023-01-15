let not = parseFloat(prompt('Notunuzu girin:'))

if (not < 0 || not > 100) {
  console.log('Hatalı not girdiniz. Lütfen 0-100 arası bir değer girin.')
} else if (not >= 91) {
  console.log('AA')
} else if (not >= 76) {
  console.log('BA')
} else if (not >= 66) {
  console.log('BB')
} else if (not >= 46) {
  console.log('CC')
} else if (not >= 26) {
  console.log('DD')
} else {
  console.log('FF')
}
