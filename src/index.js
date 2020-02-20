import cipher from './cipher.js';
//texto a cifrar
let name=document.getElementById("name");
let offset= document.getElementById("offset");
let word=document.getElementById("texto");
//variable que toma el valor a desplazar

function welcome() {
  document.getElementById("Welcome").innerText;
}

function cEncode() {
  let textEncode=cipher.encode( offset.value,word.value);
  document.getElementById("texto1").innerText=textEncode;
}

function cDecode() {
  let textDecode=cipher.decode(offset.value,word.value);
  document.getElementById("texto2").innerText=textDecode;
}
document.getElementById("name").addEventListener("click",welcome);
document.getElementById("Cifrar").addEventListener("click",cEncode);
document.getElementById("Descifrar").addEventListener("click",cDecode);
