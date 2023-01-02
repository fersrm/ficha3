const boton = document.getElementById("share");
const share1 = document.getElementById("share1");
const share2 = document.getElementById("share2");

boton.onclick = function(){
    share1.classList.toggle("activo");
    share2.classList.toggle("activo");
    boton.classList.toggle("pos")
}