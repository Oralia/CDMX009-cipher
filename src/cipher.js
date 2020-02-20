const cipher ={encode,decode}
export default cipher;
//inicia  la funcion
function encode(offset,word){
  // CON OR MANDA TYPE ERROR, SI NO INGRESAS NADA ,SI INGRESAS NUMERO O SI INGRESAS MINUSCULAS, PERO NO CIFRA
  //if ( typeof word !== 'string'| typeof offset !== 'number'){
  // CON AND CIFRA PERO NO MANDA TYPE ERROR CUANDO NO INGRESAS NADA, Y SI MANDA TYPE ERROR, SI INGRESAS NUMERO O SI INGRESAS MINUSCULAS
  if ( typeof word !== 'string'&& typeof offset !== 'number'){
    throw new(TypeError);}
    else  {
      let wordEncode="";
      //inicia la funcion
      for(let  j=0; j<word.length; j=j+1){
        //Obtiene la posicion del primer caracter a cifrar en el codigo asc11
        let i=word.charCodeAt(j);
        //Para alfabeto en MAYUSCULAS
        if (i>65 |i<90 ){
          //para caracteres especiales y el alfabeto en mayusculas y minusculas

          //Desplaza el caracter offset posiciones
          //Para alfabeto en MAYUSCULAS
          i= (i-65+ parseInt(offset)) %26+65;
          //i= (i+ parseInt(offset)) %255;
          //Guarda en una cadena el caracter desplazado (en codigo asc11)
          wordEncode+= String.fromCharCode(i);
          //imprime la palabra codificada


        }
      }
      return (wordEncode);
    }
  }

  function decode (offset,word){
    //variable que guarda la palabra codificada
    let wordDecode="";

    //inicia  la funcion
    for(let  j=0; j<word.length; j=j+1){
      //Obtiene la posicion en codigo asc11 del caracter
      let i=word.charCodeAt(j);
      //Para alfabeto en MAYUSCULAS
      if (i>65 |i<90 ){
        //para caracteres especiales y el alfabeto en mayusculas y minusculas

        //Desplaza el caracter solo de letras mayusculas
        i= (i+65-parseInt(offset)) %26+65;
        //Desplaza cualquier caracter
        //i= (i-parseInt(offset)) %255;

        //Guarda en una cadena el caracter desplazado (en codigo asc11)
        wordDecode += String.fromCharCode(i);
      }
    }
    //imprime la palabra codificada
    return (wordDecode);
  }
