const cipher ={code,decode};

//inicia  la funcion
function code(offset,word){
  //inicia la funcion
    for(let  j=0; j<word.length;j=j+1){
      //Obtiene la posicion del primer caracter a cifrar en el codigo asc11
      let i=word.charCodeAt(j);
      //Desplaza el caracter offset posiciones
      i= (i-65+offset) %26+65;
      //variable que guarda la palabra codificada

      //Guarda en una cadena el caracter desplazado (en codigo asc11)
      let wordcode;
      wordcode+= String.fromCodePoint(i);
    }
    console.log(word);
    //imprime la palabra codificada
    console.log(wordcode);

}
//imprime la funcion
//console.log (code(offset,word));


//texto a desplazar
//let wordToDecode=document.getElementById("textdecode").value;

function decode (offset,word){

  //variable que guarda la palabra codificada
  let wordDecode='';

  //inicia  la funcion
  for(let  j=0; j<word.length; j=j+1){
    //Obtiene la posicion en codigo asc11 del caracter
    let i=word.charCodeAt(j);
    //Desplaza el caracter
    i= (i+65-offset) %26+65;
    //Guarda en una cadena el caracter desplazado (en codigo asc11)
    wordDecode += String.fromCodePoint(i);
  }

  //imprime la palabra codificada
console.log(wordDecode);
}
//imprime la funcion
//console.log (decode(offset,word));

//export default decode;
//____________________________


export default cipher;
