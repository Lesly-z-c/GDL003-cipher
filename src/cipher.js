window.cipher = {
  // ...

 encode : (otrodesplazamiento, textoUsuario) => {

   let mensajeCesar = "";
    for(let i = 0; i < textoUsuario.length; i++) {

     let mensajeEnAscii = textoUsuario[i].charCodeAt(0);
     console.log(otrodesplazamiento);
     if (mensajeEnAscii >= 65 && mensajeEnAscii <= 90) {
      let transformacion= (mensajeEnAscii - 65 + otrodesplazamiento)%26+65;
      mensajeCesar += String.fromCharCode(transformacion);
    }
     if(mensajeEnAscii >= 97 && mensajeEnAscii <= 122) {
       let transformacion = (mensajeEnAscii - 97 +  otrodesplazamiento)%26+97;
       mensajeCesar += String.fromCharCode(transformacion);

  }
  if  (mensajeEnAscii >=32 && mensajeEnAscii <=64 ||mensajeEnAscii>= 91 && mensajeEnAscii <= 96 ||mensajeEnAscii>=123 && mensajeEnAscii<=126) {

    mensajeCesar += String.fromCharCode(mensajeEnAscii);
      }
      console.log(mensajeCesar);
}

      return mensajeCesar;
},

 decode : (mismoDesplazamiento, nuevoTexto) => {
    let mensajeSinCesar = "";
     for(let i = 0; i < nuevoTexto.length; i++) {
       let mensajeEnAscii1 = nuevoTexto[i].charCodeAt(0);
      console.log();
    if (mensajeEnAscii1 >= 65 && mensajeEnAscii1 <= 90) {
         let transformacion2 = ((mensajeEnAscii1 + 65) - mismoDesplazamiento)%26+65;
          mensajeSinCesar += String.fromCharCode(transformacion2);
  }
   if(mensajeEnAscii1 >= 97 && mensajeEnAscii1 <= 122) {
     let transformacion2 = ((mensajeEnAscii1 - 97) -  mismoDesplazamiento)%26+97;
     mensajeSinCesar += String.fromCharCode(transformacion2);
}
if  (mensajeEnAscii1 >=32 && mensajeEnAscii1 <=64 || mensajeEnAscii1>=123 && mensajeEnAscii1<=126) {

  mensajeSinCesar += String.fromCharCode(mensajeEnAscii1);
    }
    console.log(mensajeSinCesar);

  }
      return mensajeSinCesar;
}
};
/* if (mensajeEnAscii >=32 && mensajeEnAscii <=64 || mensajeEnAscii>=123 ) {
  let transformacion2 = mensajeSinCesar;
*/
