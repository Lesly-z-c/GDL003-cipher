const texto = document.getElementById("mensaje");

function comenzar (){
let palabra =  [];
 let textoUsuario = texto.value.toUpperCase();
 let mensajeCesar = "";
 console.log(textoUsuario);

 //document.getElementById("mensaje").value;
 for(var i = 0; i < textoUsuario.length; i++) {
   console.log(textoUsuario[i])
   let mensajeEnAscii = textoUsuario[i].charCodeAt(0);
   console.log(mensajeEnAscii);
    let transformacion= (mensajeEnAscii -65+4)%26+65;
    mensajeCesar += String.fromCharCode(transformacion);
    mensaje+=mensajeCesar;
    }
    console.log(mensajeCesar);
    document.getElementById("mensajeCesar").innerHTML = "Tu texto en codigo es :" + mensajeCesar;

    return mensajeCesar;
}
// Funciones con parametros function(string, offset)
document.getElementById("boton1").addEventListener("click", comenzar);
//addEventListener('click', function() {
