import cipher from './cipher.js';

let offset= document.getElementById("offset");
let word=document.getElementById("texto");

function welcome(){
document.getElementById("root").style.display="none";
document.getElementById("data").style.display="block";
}

function smessage() {
let nombre=document.getElementById("name").value;

document.getElementById("wMessage").innerHTML = "Hello "+nombre+" ";
  document.getElementById("root").style.display="none";
  document.getElementById("data").style.display="none";
  document.getElementById("message").style.display="block";
}
function cEncode() {
  let textEncode=cipher.encode( offset.value,word.value);
  document.getElementById("texto1").innerText=textEncode;
}

function cDecode() {
  let textDecode=cipher.decode(offset.value,word.value);
  document.getElementById("texto2").innerText=textDecode;
}


document.getElementById("go").addEventListener("click",welcome);
document.getElementById("start").addEventListener("click",smessage);
document.getElementById("Cifrar").addEventListener("click",cEncode);
document.getElementById("Descifrar").addEventListener("click",cDecode);
