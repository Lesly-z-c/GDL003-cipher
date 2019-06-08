const texto = document.getElementById("mensaje");
const desplazamiento =document.getElementById("saltos")

function comenzar (){
 let palabra =  [];
 let textoUsuario = texto.value.toUpperCase();
 let mensajeCesar = "";
 console.log(textoUsuario);
 const valorDesplazamiento = parseInt(desplazamiento.value);
 //document.getElementById("mensaje").value;
  for(var i = 0; i < textoUsuario.length; i++) {
   console.log(textoUsuario[i])
   let mensajeEnAscii = textoUsuario[i].charCodeAt(0);
   console.log(mensajeEnAscii);
    let transformacion= (mensajeEnAscii -65+ valorDesplazamiento)%26+65;
    mensajeCesar += String.fromCharCode(transformacion);
    mensaje+=mensajeCesar;
    }
    console.log(mensajeCesar);
    document.getElementById("mensajeCesar").innerHTML = "Tu texto en codigo es :" + mensajeCesar;
    return mensajeCesar;
}
function imprimir() {
  codif.style.display = "none"
  decodif.style.display = "block"

}
// Funciones con parametros function(string, offset)
document.getElementById("boton1").addEventListener("click", comenzar);
document.getElementById("boton1").addEventListener("click", imprimir); //si pongo esta linea no me imprime el mensaje codificado y me salta a decodificar, pero si la quito si lo decodifica, pero no me manda a decodificar
//addEventListener('click', function() {
//aqui empieza el desifrado
const nuevoTexto = document.getElementById("mismomensaje");
const mismoDesplazamiento = document.getElementById("mismoSalto");

function regresar (){
  //let mismoTexto = [];
  let regresamensaje = nuevoTexto.value;
  let mensajeSinCesar = '';
  console.log(regresamensaje);
  const nuevoDesplazamiento = parseInt(mismoDesplazamiento.value);

  for(var i = 0; i < regresamensaje.length; i++) {
   console.log(regresamensaje[i]);
   let mensajeEnAscii1 = regresamensaje[i].charCodeAt(0);
   console.log(mensajeEnAscii1);
    let transformacion2 = (mensajeEnAscii1 - 65 - nuevoDesplazamiento)%26+65;
    mensajeSinCesar += String.fromCharCode(transformacion2);
    //mismomensaje += mensajeSinCesar;
    }
 return mensajeSinCesar;
}


document.getElementById("boton2").addEventListener("click", function() {
  let mensajeDescifrado = regresar();
  document.getElementById("mensajeSinCesar").innerHTML = "tu texto original es :" + mensajeDescifrado;
});
