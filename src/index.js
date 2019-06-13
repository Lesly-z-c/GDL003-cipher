let texto = document.getElementById("mensaje");
const desplazamiento =document.getElementById("saltos");
let imprimir = () => {
  document.getElementById("codif").style.display = "none";
  document.getElementById("decodif").style.display = "block";
};
 let encode = ()=> {
    let textoUsuario = document.getElementById("mensaje").value;
    //const valorDesplazamiento = parseInt(desplazamiento.value);
    let valorDesplazamiento = parseInt(desplazamiento.value);
    console.log(valorDesplazamiento, texto);
    let mensajeCesar = window.cipher.encode(valorDesplazamiento, textoUsuario);
    document.getElementById("mensajeCesar").innerHTML = "Tu texto en codigo es :" + mensajeCesar;

 };
document.getElementById("boton1").addEventListener("click", encode);
document.getElementById("decodadecof").addEventListener("click", imprimir); //si pongo esta linea no me imprime el mensaje codificado y me salta a decodificar, pero si la quito si lo decodifica, pero no me manda a decodificar

const desplazamiento2 = document.getElementById("mismoSalto");
let decode = ()=> {
   let nuevoTexto = document.getElementById("mismomensaje").value;
   let mismoDesplazamiento = parseInt(desplazamiento2.value);
   console.log(mismoDesplazamiento, nuevoTexto);
   let mensajeSinCesar = window.cipher.decode(mismoDesplazamiento, nuevoTexto);
   document.getElementById("mensajeSinCesar").innerHTML = "Tu texto original es :" + mensajeSinCesar;
};
let refrescar = () =>{
window.location.href = window.location.href;
};
document.getElementById("boton2").addEventListener("click", decode);
document.getElementById("finainicio").addEventListener("click", refrescar);
