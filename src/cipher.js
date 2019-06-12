window.cipher = {
  // ...

 encode : (otrodesplazamiento, textoUsuario) => {

   let mensajeCesar = "";



    for(var i = 0; i < textoUsuario.length; i++) {
     console.log(textoUsuario[i]);
     let mensajeEnAscii = textoUsuario[i].charCodeAt(0);
     console.log(mensajeEnAscii);
      let transformacion= (mensajeEnAscii -65 + otrodesplazamiento)%26+65;
      mensajeCesar += String.fromCharCode(transformacion);


      console.log(mensajeCesar);
}

      return mensajeCesar;
},

 decode : (mismoDesplazamiento, nuevoTexto) => {
    //let mismoTexto = [];
    let mensajeSinCesar = '';
    for(let i = 0; i <nuevoTexto.length; i++) {
      console.log(+nuevoTexto[i]);
      let mensajeEnAscii1 = nuevoTexto.charCodeAt(i);
      console.log(mensajeEnAscii1);
      if (mensajeEnAscii1 >= 65 && mensajeEnAscii1 <= 90) {
         let transformacion2 = (mensajeEnAscii1 + 65 -  mismoDesplazamiento) % 26 + 65;
          mensajeSinCesar += String.fromCharCode(transformacion2);
            //mismomensaje += mensajeSinCesar;
      }
        console.log(mensajeSinCesar);
    }
    console.log(mensajeSinCesar);
   return mensajeSinCesar;
  }
};
