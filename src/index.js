//variable que toma el valor a desplazar
let offset= parseInt(document.getElementById("offset").value);
//texto a cifrar
let word=document.getElementById("texto").value;

import cipher from './cipher.js';
console.log(cipher);

function cCode() {
  let textCode=cipher.code(offset.value, word.value);
  document.getElementById("textcode").innerHTML = textCode;
};

function cDecode() {
  let textCode=cipher.decode(offset.value,word.value);
  document.getElementById("textcode").innerHTML = textCode;
};
