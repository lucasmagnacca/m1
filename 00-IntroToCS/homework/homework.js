'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let bina = 0;
for (let i = 0; i< num.length; i++){
bina = bina + num[i] * 2 ** (num.length-1-i)
}
return bina;

}

function DecimalABinario(num) {
  // tu codigo aca
  let numero = ""
  while(num > 0){
  numero = (num % 2) + numero
num = Math.floor(num/2)
  }
  return numero
}
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}